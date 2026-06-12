import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

const server = new McpServer({ name: "https://aptness.ai/", version: "1.0.0" });

server.tool("ai_agent_builder", "For creating and managing custom AI agents.", {}, async () => ({ content: [{ type: "text", text: "ok" }] }));
server.tool("workflow_designer", "For visually designing and automating workflows.", {}, async () => ({ content: [{ type: "text", text: "ok" }] }));
server.tool("natural_language_interface", "Handles chat-powered interactions and understanding.", {}, async () => ({ content: [{ type: "text", text: "ok" }] }));
server.tool("application_connector", "Manages connections to various external applications.", {}, async () => ({ content: [{ type: "text", text: "ok" }] }));
server.tool("data_transformation_engine", "Processes and transforms data for AI and workflows.", {}, async () => ({ content: [{ type: "text", text: "ok" }] }));

export { server };
