### OpenClaw Agent Skills for Aptness.ai

This document outlines the skills available to the OpenClaw agent for interacting with the Aptness.ai platform. These skills allow the agent to assist users with automating workflows, managing applications, and leveraging Aptness's community features.

#### Core Interaction Skills

*   **`browse_marketplace(category: Optional[str] = None, query: Optional[str] = None) -> List[Dict]`**
    *   **Description**: Searches or browses for automation packages in the Aptness Marketplace. Can filter by category or a search query.
    *   **Parameters**:
        *   `category` (str, optional): The category to filter packages by (e.g., "Marketing", "Sales", "E-Commerce").
        *   `query` (str, optional): A search term to find specific packages.
    *   **Returns**: A list of dictionaries, each representing a package with 'id', 'name', 'description', and 'category'.

*   **`install_package(package_id: str) -> str`**
    *   **Description**: Initiates the installation of a specified automation package from the Marketplace into the user's Aptness account.
    *   **Parameters**:
        *   `package_id` (str): The unique identifier of the package to install.
    *   **Returns**: A status message indicating success or failure, and any next steps (e.g., "Please connect your Gmail account to complete setup.").

*   **`describe_task_to_rapid_agent(task_description: str) -> str`**
    *   **Description**: Utilizes Aptness's 'Rapid Agent' feature by providing a natural language description of a task for instant automation.
    *   **Parameters**:
        *   `task_description` (str): A detailed description of the task to be automated.
    *   **Returns**: A status message, including confirmation of task initiation and any prompts for further user input (e.g., app connections).

*   **`connect_app(app_name: str) -> str`**
    *   **Description**: Guides the user through connecting a new third-party application (e.g., Gmail, Slack, GitHub) to their Aptness account.
    *   **Parameters**:
        *   `app_name` (str): The name of the application to connect (e.g., "Gmail", "Slack", "GitHub").
    *   **Returns**: Instructions and a link to the connection page, confirming successful connection once completed.

*   **`monitor_automation_status(automation_id: Optional[str] = None) -> Dict`**
    *   **Description**: Retrieves the current status and recent activity logs for a specific automation or lists all active automations if no ID is provided.
    *   **Parameters**:
        *   `automation_id` (str, optional): The unique identifier of the automation to check.
    *   **Returns**: A dictionary containing the automation's status, last run time, success/failure, and relevant details.

#### Advanced (Creator) Skills

*   **`publish_system(system_details: Dict) -> str`**
    *   **Description**: Publishes a custom-designed agent or package to the Aptness Marketplace, making it available for others to use and for the creator to earn credits.
    *   **Parameters**:
        *   `system_details` (Dict): A dictionary containing metadata for the system (e.g., 'name', 'description', 'category', 'agent_config_id').
    *   **Returns**: A confirmation message with the URL of the newly published system or an error.
