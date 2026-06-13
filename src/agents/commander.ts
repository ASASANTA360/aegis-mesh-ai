import {
  AgentRequest,
  AgentResponse,
} from "./types";

import { QVACClient } from "@/qvac/client";
import { qvacLogger } from "@/qvac/logger";

const qvac = new QVACClient();

export class CommanderAgent {

  async execute(
    request: AgentRequest
  ): Promise<AgentResponse> {

    const start = performance.now();

    const text =
      request.input.toLowerCase();

    let selectedAgent =
      "Aegis Assistant";

    let prompt =
      request.input;


    // Intelligent routing
    if (
      text.includes("pdf") ||
      text.includes("document") ||
      text.includes("contract")
    ) {

      selectedAgent =
        "Document Agent";

      prompt =
        `[DOCUMENT ANALYSIS]\n${request.input}`;
    }


    else if (
      text.includes("scam") ||
      text.includes("fraud") ||
      text.includes("phishing")
    ) {

      selectedAgent =
        "Security Agent";

      prompt =
        `[SECURITY SCAN]\n${request.input}`;
    }


    else if (
      text.includes("notes") ||
      text.includes("search") ||
      text.includes("knowledge")
    ) {

      selectedAgent =
        "Knowledge Agent";

      prompt =
        `[LOCAL RAG SEARCH]\n${request.input}`;
    }


    else if (
      text.includes("mesh") ||
      text.includes("device") ||
      text.includes("network")
    ) {

      selectedAgent =
        "Mesh Agent";

      prompt =
        `[P2P INFERENCE]\n${request.input}`;
    }


    // QVAC Local Inference
    await qvac.loadModel();

    const response =
      await qvac.infer(prompt);


    // Save Performance Logs
    qvacLogger.add({
      timestamp: Date.now(),
      model: "psy-local-model",
      tokens: response.tokens,
      tps: response.tps,
      ttft: response.ttft,
    });


    return {
      agent: selectedAgent,
      success: true,
      result:
        `🤖 ${selectedAgent}\n\n${response.output}`,
      latency:
        Math.round(
          performance.now() - start
        ),
    };

  }

}