# Files To Create — Aptness - Automate your Workflows seamlessly OpenClaw/MoltBot Integration

> Complete checklist of every file you need to create or modify.
> Generated: 2026-05-18T06:17:42.745Z

---

## 1. `manifest.json`

- **Path:** `./aptness-agent`
- **Type:** json
- **Purpose:** The manifest file for the Aptness.ai MoltBot agent, defining its basic properties and starting URL.

### Content

```json
{
  "name": "Aptness.ai Agent",
  "description": "An OpenClaw agent for interacting with the Aptness.ai website, helping users explore features and initiate workflows.",
  "version": "0.1.0",
  "skills": ["skills.md"],
  "homepage": "https://aptness.ai/",
  "auth": {
    "type": "none"
  },
  "browserSettings": {
    "startUrl": "https://aptness.ai/"
  }
}
```

---

## 2. `skills.js`

- **Path:** `./aptness-agent`
- **Type:** javascript
- **Purpose:** JavaScript implementation of the MoltBot agent's skills for interacting with Aptness.ai.

### Content

```javascript
export default class AptnessSkills {
  constructor(agent) {
    this.agent = agent;
  }

  async navigate_to_section(section_name) {
    await this.agent.goto("https://aptness.ai/"); // Ensure we are on the homepage first
    const lowerSectionName = section_name.toLowerCase();
    if (lowerSectionName === "marketplace") {
      await this.agent.scrollTo('h3:has-text("Marketplace")');
    } else if (lowerSectionName === "custom agents") {
      await this.agent.scrollTo('h3:has-text("Custom Agents")');
    } else if (lowerSectionName === "rapid agent") {
      await this.agent.scrollTo('h3:has-text("Rapid Agent")');
    } else if (lowerSectionName === "how it works") {
      await this.agent.scrollTo('h2:has-text("From zero to automated in 3 steps")');
    } else if (lowerSectionName === "share your magic") {
      await this.agent.scrollTo('h2:has-text("Share your system. Share your magic.")');
    } else if (lowerSectionName === "everything in the box") {
      await this.agent.scrollTo('h2:has-text("More than just agents — a complete platform")');
    } else {
      throw new Error(`Unknown section: ${section_name}. Valid options are: Marketplace, Custom Agents, Rapid Agent, How it works, Share your magic, Everything in the box.`);
    }
    return `Navigated to the '${section_name}' section.`;
  }

  async describe_task_to_rapid_agent(task_description) {
    await this.agent.goto("https://aptness.ai/");
    // The rapid agent input is a textarea with a specific placeholder
    const inputSelector = 'textarea[placeholder*="Generate a weekly report from my sheet"]';
    const inputElement = await this.agent.page.locator(inputSelector).first();
    if (!await inputElement.isVisible()) {
      await this.agent.scrollTo(inputSelector);
    }
    await this.agent.fill(inputSelector, task_description);
    // There isn't an explicit 'Run' button on the landing page associated with this input.
    // The text 'Or try your own task' is a button. Clicking it may lead to the actual Rapid Agent interface.
    const tryOwnTaskButton = await this.agent.page.locator('button:has-text("Try your own task")');
    if (await tryOwnTaskButton.isVisible()) {
      await tryOwnTaskButton.click();
      return `Filled the Rapid Agent input with: "${task_description}". Initiated the 'Try your own task' flow.`;
    } else {
      return `Filled the Rapid Agent input with: "${task_description}". No explicit submission button found on this page.`;
    }
  }

  async list_integrated_apps() {
    await this.agent.goto("https://aptness.ai/");
    // Scroll to the 'Connect your apps' section
    await this.agent.scrollTo('h2:has-text("Connect your apps")');

    const apps = await this.agent.evaluate(() => {
      const appNames = [];
      // Select elements containing app names, typically <p> tags within specific containers
      const appElements = document.querySelectorAll('div.flex.flex-col.items-center.gap-2 p.text-sm.font-medium');
      appElements.forEach(el => {
        appNames.push(el.textContent.trim());
      });
      return appNames;
    });
    return `Aptness integrates with the following apps: ${apps.join(', ')}.`;
  }

  async start_getting_started_flow() {
    await this.agent.goto("https://aptness.ai/");
    // Click the 'Get started free' button in the header navigation
    const getStartedButton = await this.agent.page.locator('button:has-text("Get started free")');
    if (await getStartedButton.isVisible()) {
      await getStartedButton.click();
      return "Initiated the 'Get started free' flow. You should now be on the signup/onboarding page.";
    } else {
      return "'Get started free' button not found.";
    }
  }
}
```

---

## Widget Embed Code

Paste this before `</body>` in your main HTML file:

```html
<script type="module" src="https://unpkg.com/moltbot?ui=true"></script>
<molt-bot agent-url="YOUR_AGENT_URL"></molt-bot>
```

---

## Quick Start Checklist

- [ ] **Step 1:** Set up MoltBot/OpenClaw Environment — Ensure you have Node.js (v18+) and npm installed. Install the MoltBot CLI globally.
- [ ] **Step 2:** Create Agent Directory — Create a new directory for your Aptness.ai agent and navigate into it.
- [ ] **Step 3:** Create `manifest.json` — Create a file named `manifest.json` in your `aptness-agent` directory with the provided content.
- [ ] **Step 4:** Create `skills.md` — Create a file named `skills.md` in your `aptness-agent` directory with the provided content.
- [ ] **Step 5:** Create `skills.js` — Create a file named `skills.js` in your `aptness-agent` directory with the provided JavaScript implementation.
- [ ] **Step 6:** Run the Agent Locally — Start the MoltBot agent in developer mode to test its functionality.
- [ ] **Step 7:** Deploy the Agent (Optional) — Once satisfied, deploy your agent to a hosting platform like MoltBot Cloud or Vercel to get a public URL.