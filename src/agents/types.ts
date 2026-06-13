export type AgentTask =
  | "chat"
  | "document_analysis"
  | "security_scan"
  | "knowledge_search"
  | "mesh_inference";

export interface AgentRequest {
  task: AgentTask;
  input: string;
  timestamp: number;
}

export interface AgentResponse {
  agent: string;
  success: boolean;
  result: string;
  latency: number;
}