import { ModelContextProtocolServer } from '@modelcontextprotocol/sdk';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*'
}));

const mcpServer = new ModelContextProtocolServer();

mcpServer.registerTool({
  name: 'automate_email',
  description: 'Automates sending emails, triggering emails based on events, or managing email-related workflows using connected email platforms.',
  inputSchema: {
    recipient: 'Email address of the recipient',
    subject: 'Subject of the email',
    body: 'Content of the email',
    trigger_event: 'Optional event to trigger the email, e.g., 'new_signup', 'payment_received'',
    attachments: 'Optional array of attachment URLs or file paths'
  },
  returnType: 'string',
  handler: async (args: { recipient: string; subject: string; body: string; trigger_event?: string; attachments?: string[] }) => {
    console.log(`Automating email for: ${args.recipient}`);
    // Placeholder for actual email automation logic via Aptness platform
    return `Email automation configured/sent for ${args.recipient} with subject '${args.subject}'.`;
  },
});

mcpServer.registerTool({
  name: 'create_event',
  description: 'Creates and schedules calendar events, meetings, or reminders based on provided details, integrating with scheduling tools.',
  inputSchema: {
    title: 'Title of the event',
    start_time: 'Start date and time of the event (ISO 8601 format)',
    end_time: 'End date and time of the event (ISO 8601 format)',
    attendees: 'Optional array of attendee email addresses',
    location: 'Optional physical location or virtual conference link',
    description: 'Optional detailed description of the event'
  },
  returnType: 'string',
  handler: async (args: { title: string; start_time: string; end_time: string; attendees?: string[]; location?: string; description?: string }) => {
    console.log(`Creating event: ${args.title} from ${args.start_time} to ${args.end_time}`);
    // Placeholder for actual event creation logic via Aptness platform
    return `Event '${args.title}' scheduled successfully from ${args.start_time} to ${args.end_time}.`;
  },
});

mcpServer.registerTool({
  name: 'generate_content',
  description: 'Generates text content like blog posts, articles, marketing copy, or social media updates based on a given topic and content type.',
  inputSchema: {
    topic: 'The main topic or subject for the content generation',
    type: 'The type of content to generate (e.g., 'blog_post', 'email_draft', 'marketing_ad_copy')',
    length_words: 'Optional desired length of the content in words',
    keywords: 'Optional array of keywords to include in the content'
  },
  returnType: 'string',
  handler: async (args: { topic: string; type: string; length_words?: number; keywords?: string[] }) => {
    console.log(`Generating ${args.type} content for topic: ${args.topic}`);
    // Placeholder for actual content generation logic via Aptness platform AI
    return `Content generation for '${args.topic}' (${args.type}) has been initiated. Output will be available shortly.`;
  },
});

mcpServer.registerTool({
  name: 'connect_application',
  description: 'Facilitates the connection and authentication of a new third-party application to the Aptness platform for automation purposes.',
  inputSchema: {
    app_name: 'The name of the application to connect (e.g., 'Gmail', 'HubSpot', 'Google Drive', 'Notion')',
    auth_method: 'The preferred authentication method (e.g., 'OAuth', 'API_Key')'
  },
  returnType: 'string',
  handler: async (args: { app_name: string; auth_method: string }) => {
    console.log(`Connecting application: ${args.app_name} using ${args.auth_method}`);
    // Placeholder for initiating app connection flow via Aptness platform
    return `Connection process for ${args.app_name} using ${args.auth_method} initiated. Please complete the authentication on the Aptness dashboard.`;
  },
});

mcpServer.registerTool({
  name: 'run_workflow',
  description: 'Executes or initiates a complex, multi-step workflow across connected applications based on a natural language description provided by the user.',
  inputSchema: {
    workflow_description: 'A detailed natural language description of the workflow to execute or configure (e.g., 'When a new lead comes in from website, add them to CRM and send a welcome email')',
    workflow_name: 'Optional name to assign to the new or triggered workflow'
  },
  returnType: 'string',
  handler: async (args: { workflow_description: string; workflow_name?: string }) => {
    console.log(`Executing workflow: ${args.workflow_description}`);
    // Placeholder for actual workflow execution via Aptness platform
    return `Workflow '${args.workflow_name || args.workflow_description.substring(0, 30) + '...'}' has been initiated. Check your Aptness dashboard for status.`;
  },
});

// Integrate with Express to serve the MCP routes
app.use('/mcp', mcpServer.router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Aptness WebMCP Server running on port ${PORT}`);
});
