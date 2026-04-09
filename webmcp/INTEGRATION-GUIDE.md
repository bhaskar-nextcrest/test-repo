# WebMCP Integration Guide — Aptness - Automate your Workflows seamlessly

**URL:** https://aptness.ai/
**Industry:** Workflow Automation Software

## Business Overview
Aptness provides an intuitive, AI-powered chat platform that enables users to effortlessly connect various applications and automate complex workflows using natural language commands. It simplifies business process automation, allowing individuals, teams, and enterprises to streamline operations, enhance productivity, and manage tasks across a wide range of integrated tools without requiring technical expertise.

## MCP Tools
1. **automate_email** — Automates sending emails, triggering emails based on events, or managing email-related workflows using connected email platforms.
2. **create_event** — Creates and schedules calendar events, meetings, or reminders based on provided details, integrating with scheduling tools.
3. **generate_content** — Generates text content like blog posts, articles, marketing copy, or social media updates based on a given topic and content type.
4. **connect_application** — Facilitates the connection and authentication of a new third-party application to the Aptness platform for automation purposes.
5. **run_workflow** — Executes or initiates a complex, multi-step workflow across connected applications based on a natural language description provided by the user.

## Discovered Endpoints
- `POST /contact` — Allows users to submit messages to the Aptness team through a contact form, requesting support or information.
- `GET /pricing` — Retrieves the current pricing plans offered by Aptness, including Free, Starter, Pro (coming soon), and Custom options.
- `POST /sign-up` — Initiates the registration process for a new Aptness user account, typically for the free tier, allowing them to get started with automation.

## Integrations
1. **Google Drive** (REST): Integrates with Google Drive to automate file uploads, management, and other document-related tasks within workflows.
2. **Gmail** (REST): Connects with Gmail to enable email automation, sending, triggering, and managing email communications through workflows.
3. **HubSpot CRM** (REST): Integrates with HubSpot CRM to automate customer relationship management tasks, lead synchronization, and marketing workflows.

## Setup Steps
### Step 1: Set up Node.js Environment
Ensure you have Node.js (v18 or higher) and npm installed on your server or local development machine.
```
node -v
npm -v
```
### Step 2: Create MCP Server Project
Initialize a new Node.js project for your MCP server and install the necessary dependencies.
```
mkdir aptness-mcp-server
cd aptness-mcp-server
npm init -y
npm install @modelcontextprotocol/sdk express cors typescript @types/express @types/cors ts-node
```
### Step 3: Configure TypeScript
Create a `tsconfig.json` file to configure TypeScript for your project.
```
npx tsc --init
```
### Step 4: Implement MCP Server Code
Create an `index.ts` file in your `aptness-mcp-server` directory and paste the provided TypeScript MCP server code into it.
```
touch index.ts
```
### Step 5: Run the MCP Server
Start your MCP server. It will listen on port 3000 by default. Ensure this port is open if deploying remotely.
```
npx ts-node index.ts
```
### Step 6: Integrate WebMCP Widget
Add the provided HTML/JS embed snippet to your website's HTML file, preferably before the closing `</body>` tag. Remember to replace `http://localhost:3000/mcp` with your actual deployed MCP server URL.
```
N/A
```

## UI Integration Guide
# Integrating the Aptness WebMCP Widget

This guide will walk you through the process of embedding the WebMCP widget into your Aptness website to enable AI-powered interactions.

## 1. Locate Your HTML File

Identify the main HTML file(s) where you want the WebMCP widget to appear. For a single-page application (SPA), this is usually `index.html`. For a traditional multi-page site, you might add it to a footer or a universal template file.

## 2. Place the Widget Embed Code

Paste the provided `webmcpWidgetCode` snippet into your HTML file. It's recommended to place it just before the closing `</body>` tag. This ensures that your page content loads first, and the widget can then initialize without blocking render.

```html
    <!-- Your existing website content goes here -->

    <div id="webmcp-widget-container"></div>

    <script src="https://cdn.jsdelivr.net/npm/@modelcontextprotocol/web-widget@latest/dist/webmcp-widget.min.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const widgetContainer = document.getElementById('webmcp-widget-container');
        if (widgetContainer) {
          window.WebMCPWidget.init({
            containerId: 'webmcp-widget-container',
            mcpServerUrl: 'http://localhost:3000/mcp', // **IMPORTANT: Replace with your deployed MCP server URL**
            initialMessage: 'Hello! I am your Aptness AI assistant. How can I help you automate today?',
            theme: {
              primaryColor: '#007bff',
              accentColor: '#6c757d',
              buttonBackgroundColor: '#007bff',
              buttonTextColor: '#ffffff',
              chatBubbleUserBackground: '#e0efff',
              chatBubbleBotBackground: '#f0f0f0'
            },
            branding: {
              productName: 'Aptness AI',
              logoUrl: 'https://aptness.ai/favicon.svg' 
            },
            features: {
              speechToText: true,
              textToSpeech: true
            }
          });
        }
      });
    </script>
</body>
</html>
```

### Important Considerations:

*   **`mcpServerUrl`**: **You must replace `'http://localhost:3000/mcp'` with the actual URL where your MCP server is deployed and publicly accessible.** If your Aptness website is `https://app.aptness.ai` and your MCP server is deployed to `https://api.aptness.ai/mcp`, then update the URL accordingly.
*   **`containerId`**: Make sure the `containerId` (`webmcp-widget-container` in this example) matches the `id` of the `<div>` element where you want the widget to render.

## 3. Customize Styling (Optional)

The widget comes with default styling, but you can customize its appearance to match Aptness's brand identity by adjusting the `theme` object in the `WebMCPWidget.init` configuration.

*   `primaryColor`: Controls the main interactive elements (e.g., send button, header).
*   `accentColor`: For secondary elements.
*   `buttonBackgroundColor`, `buttonTextColor`: For the chat toggle button.
*   `chatBubbleUserBackground`, `chatBubbleBotBackground`: For chat bubble colors.

## 4. Test the Widget

After deploying your MCP server and adding the widget code to your website, open your website in a browser. You should see the WebMCP chat widget icon (typically in the bottom-right corner). Click it to open the chat interface and start interacting with your Aptness AI assistant.

Ensure that:
*   The widget loads without errors.
*   You can send messages and receive responses from your MCP server.
*   The custom tools (e.g., `automate_email`, `create_event`) are correctly invoked by the AI.

By following these steps, you will successfully integrate the WebMCP widget, providing an intelligent, chat-powered interface for your users to interact with Aptness's automation capabilities.

## Bot-Friendliness Checklist
- [x] **Semantic HTML Structure**: The website appears to use modern web development practices, suggesting a generally good semantic HTML structure which aids bot parsing and understanding of content hierarchy.
- [x] **Clear Call-to-Actions (CTAs)**: The site effectively uses clear CTAs like 'Get Started', 'Start Automating Now', and 'Contact Sales', guiding bots (and users) toward key conversion points.
- [x] **Contact Information Accessibility**: Email address (info@aptness.ai) and a dedicated contact form are prominently displayed, providing direct channels for communication, which bots can easily identify.
- [ ] **robots.txt and Sitemap.xml**: While not explicitly present in the provided content, implementing a `robots.txt` file and a `sitemap.xml` is crucial for guiding bots on what to crawl, what to ignore, and the overall structure of the site.
- [ ] **Structured Data (Schema.org)**: No evident Schema.org markup for product features, organization details, or FAQs. Adding this would enhance bot understanding of specific content types and Aptness's offerings.
- [ ] **API Documentation for Aptness Platform**: Aptness focuses on integrating with *other* APIs. However, for a bot to programmatically interact with Aptness's *own* platform beyond the UI (e.g., to manage workflows), public API documentation for Aptness itself would be highly beneficial.
- [ ] **Error Handling and User Feedback**: Details on user-facing error messages or feedback mechanisms (e.g., for form submissions, API failures) are not provided. Clear error handling is important for bots attempting form submissions or interactions.
- [x] **Unique and Descriptive Page Titles/Meta Descriptions**: Pages like 'Aptness - Automate your Workflows seamlessly' and 'Simple, transparent pricing' have clear, descriptive titles that aid in search engine indexing and bot content categorization.