import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

const server = new McpServer({ name: "https://aptness.ai/", version: "1.0.0" });

server.tool("ai_model_hosting", "Platforms for deploying and managing machine learning models.", {}, async () => ({ content: [{ type: "text", text: "ok" }] }));
server.tool("workflow_orchestration_engine", "Core system for defining, executing, and monitoring automated workflows.", {}, async () => ({ content: [{ type: "text", text: "ok" }] }));
server.tool("cloud_compute_platform", "Underlying infrastructure service for hosting the SaaS application.", {}, async () => ({ content: [{ type: "text", text: "ok" }] }));
server.tool("api_management_platform", "Tooling for securing, scaling, and managing internal and external APIs.", {}, async () => ({ content: [{ type: "text", text: "ok" }] }));
server.tool("data_storage_solution", "Database and storage services for persistent data, configurations, and logs.", {}, async () => ({ content: [{ type: "text", text: "ok" }] }));

export { server };
