{
  "mcpTools": [
    {
      "name": "workflow_orchestration_engine",
      "description": "Core engine for defining, executing, and monitoring automated workflows."
    },
    {
      "name": "ai_model_management_service",
      "description": "Manages and deploys AI models used within automation workflows."
    },
    {
      "name": "api_connector_framework",
      "description": "Standardized framework for building and managing integrations with various applications."
    },
    {
      "name": "data_transformation_pipeline",
      "description": "Processes and transforms data between connected applications within workflows."
    },
    {
      "name": "intuitive_workflow_builder_ui",
      "description": "Graphical user interface for designing and configuring automation workflows."
    }
  ],
  "integrations": [
    {
      "name": "CRM Systems",
      "type": "REST",
      "description": "Connects with popular CRM platforms like Salesforce, HubSpot to automate sales and customer service tasks."
    },
    {
      "name": "Communication Platforms",
      "type": "REST",
      "description": "Integrates with Slack, Microsoft Teams to send notifications or trigger actions based on messages."
    },
    {
      "name": "Cloud Storage",
      "type": "REST",
      "description": "Links to Google Drive, Dropbox, OneDrive for file management and document automation."
    },
    {
      "name": "HRIS Platforms",
      "type": "REST",
      "description": "Connects with HR information systems for employee onboarding, offboarding, and data synchronization."
    },
    {
      "name": "Developer APIs",
      "type": "REST",
      "description": "Allows custom integrations with any third-party service exposing a RESTful API."
    }
  ],
  "discoveredEndpoints": [
    {
      "path": "/workflows",
      "method": "GET",
      "description": "Retrieves a list of all configured automation workflows for the user/organization."
    },
    {
      "path": "/workflows",
      "method": "POST",
      "description": "Creates a new automation workflow."
    },
    {
      "path": "/integrations",
      "method": "GET",
      "description": "Lists all connected application integrations."
    },
    {
      "path": "/triggers",
      "method": "POST",
      "description": "Configures a new event trigger for a workflow."
    },
    {
      "path": "/tasks/{id}/status",
      "method": "PATCH",
      "description": "Updates the status of a specific workflow task."
    }
  ],
  "setupSteps": [
    {
      "step": 1,
      "title": "Create Your Aptness Account",
      "description": "Sign up and set up your organization's profile on the Aptness platform."
    },
    {
      "step": 2,
      "title": "Connect Your Applications",
      "description": "Integrate the third-party applications you want to automate (e.g., CRM, Slack, Google Drive)."
    },
    {
      "step": 3,
      "title": "Build Your First Workflow",
      "description": "Use the intuitive builder to design and configure your initial automation workflow."
    },
    {
      "step": 4,
      "title": "Define Triggers and Actions",
      "description": "Specify what events will start your workflows and what actions they will perform."
    },
    {
      "step": 5,
      "title": "Deploy and Monitor Automations",
      "description": "Activate your workflows and monitor their execution and performance through the dashboard."
    }
  ]
}
