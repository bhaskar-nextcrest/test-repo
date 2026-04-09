# Files to Create — Aptness - Automate your Workflows seamlessly (WebMCP)

## MCP Tools
- **automate_email**: Automates sending emails, triggering emails based on events, or managing email-related workflows using connected email platforms.
- **create_event**: Creates and schedules calendar events, meetings, or reminders based on provided details, integrating with scheduling tools.
- **generate_content**: Generates text content like blog posts, articles, marketing copy, or social media updates based on a given topic and content type.
- **connect_application**: Facilitates the connection and authentication of a new third-party application to the Aptness platform for automation purposes.
- **run_workflow**: Executes or initiates a complex, multi-step workflow across connected applications based on a natural language description provided by the user.

## Setup Steps
### Step 1: Set up Node.js Environment
Ensure you have Node.js (v18 or higher) and npm installed on your server or local development machine.
### Step 2: Create MCP Server Project
Initialize a new Node.js project for your MCP server and install the necessary dependencies.
### Step 3: Configure TypeScript
Create a `tsconfig.json` file to configure TypeScript for your project.
### Step 4: Implement MCP Server Code
Create an `index.ts` file in your `aptness-mcp-server` directory and paste the provided TypeScript MCP server code into it.
### Step 5: Run the MCP Server
Start your MCP server. It will listen on port 3000 by default. Ensure this port is open if deploying remotely.
### Step 6: Integrate WebMCP Widget
Add the provided HTML/JS embed snippet to your website's HTML file, preferably before the closing `</body>` tag. Remember to replace `http://localhost:3000/mcp` with your actual deployed MCP server URL.