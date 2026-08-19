import { EventType } from "@ag-ui/core";
import { describe, expect, it, vi } from "vitest";

import { Prisma, type PrismaClient } from "../../db";
import { IN_APP_AGENT_SILENT_MCP_OUTPUT_MESSAGE } from "../constants";
import {
  appendRunEvents,
  createSandboxToolCallFileAccumulator,
  getConversationMessages,
} from "./persistence";

describe("getConversationMessages", () => {
  it("redacts silent MCP tool outputs", async () => {
    const content = JSON.stringify({
      type: "silent-mcp-output",
      output: { data: [{ id: "observation-1" }] },
    });
    const prisma = {
      inAppAgentEvent: {
        findMany: async () => [
          {
            event: {
              type: EventType.TOOL_CALL_RESULT,
              messageId: "tool-result-1",
              toolCallId: "tool-call-1",
              content,
            },
            runId: "run-1",
            createdAt: new Date("2026-08-05T00:00:00.000Z"),
            sequenceNumber: 0,
          },
        ],
      },
    } as unknown as PrismaClient;

    await expect(
      getConversationMessages({
        prisma,
        projectId: "project-1",
        conversationId: "conversation-1",
      }),
    ).resolves.toEqual([
      {
        id: "tool-result-1",
        role: "tool",
        toolCallId: "tool-call-1",
        content: IN_APP_AGENT_SILENT_MCP_OUTPUT_MESSAGE,
      },
    ]);
  });
});

describe("createSandboxToolCallFileAccumulator", () => {
  it("incrementally builds files from tool-call events", () => {
    const accumulator = createSandboxToolCallFileAccumulator([]);
    const createdAt = new Date("2026-08-05T00:00:00.000Z");

    accumulator.processEvent({
      createdAt,
      runId: "run-1",
      event: {
        type: EventType.TOOL_CALL_START,
        toolCallId: "tool-call-1",
        toolCallName: "langfuse_getHealth",
      },
    });
    accumulator.processEvent({
      createdAt,
      runId: "run-1",
      event: {
        type: EventType.TEXT_MESSAGE_CHUNK,
        messageId: "message-1",
        delta: "ignored token",
      },
    });
    accumulator.processEvent({
      createdAt,
      runId: "run-1",
      event: {
        type: EventType.TOOL_CALL_ARGS,
        toolCallId: "tool-call-1",
        delta: '{"projectId":"project-1"}',
      },
    });
    accumulator.processEvent({
      createdAt,
      runId: "run-1",
      event: {
        type: EventType.TOOL_CALL_RESULT,
        toolCallId: "tool-call-1",
        content: '{"status":"ok"}',
      },
    });

    expect(accumulator.getFiles()).toEqual([
      {
        path: "tool_calls/2026-08-05T00-00-00.000Z_langfuse_getHealth_tool-call-1.json",
        content: JSON.stringify(
          {
            request: { projectId: "project-1" },
            response: { status: "ok" },
            error: null,
          },
          null,
          2,
        ),
      },
    ]);
  });
});

const transactionTimeout = () =>
  new Prisma.PrismaClientKnownRequestError("Transaction already closed", {
    code: "P2028",
    clientVersion: "test",
  });

const appendRunEventsTx = {
  $queryRaw: async () => [{ deletedAt: null }],
  inAppAgentRun: {
    findFirst: async () => ({ id: "run-1" }),
  },
  inAppAgentEvent: {
    findFirst: async () => null,
    createMany: async () => ({ count: 0 }),
  },
};

describe("appendRunEvents", () => {
  it("retries once when the persist transaction times out", async () => {
    let attempts = 0;
    const conversationUpdate = vi.fn().mockResolvedValue({});
    const prisma = {
      $transaction: async (
        fn: (tx: typeof appendRunEventsTx) => Promise<boolean>,
      ) => {
        attempts += 1;
        if (attempts === 1) {
          throw transactionTimeout();
        }
        return fn(appendRunEventsTx);
      },
      inAppAgentConversation: { update: conversationUpdate },
    } as unknown as PrismaClient;

    await expect(
      appendRunEvents({
        prisma,
        projectId: "project-1",
        conversationId: "conversation-1",
        runId: "run-1",
        events: [],
      }),
    ).resolves.toBe(true);

    expect(attempts).toBe(2);
    expect(conversationUpdate).toHaveBeenCalledOnce();
  });

  it("does not retry a persist transaction that times out twice", async () => {
    const prisma = {
      $transaction: async () => {
        throw transactionTimeout();
      },
      inAppAgentConversation: { update: vi.fn() },
    } as unknown as PrismaClient;

    await expect(
      appendRunEvents({
        prisma,
        projectId: "project-1",
        conversationId: "conversation-1",
        runId: "run-1",
        events: [],
      }),
    ).rejects.toMatchObject({ code: "P2028" });

    expect(prisma.inAppAgentConversation.update).not.toHaveBeenCalled();
  });
});
