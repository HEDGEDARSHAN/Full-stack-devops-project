Full-Stack DevOps Project - ReachInbox Assignment

Project Overview

This project is a containerized full-stack application designed to demonstrate DevOps fundamentals, including service orchestration, automated CI pipelines, and environment configuration. The system consists of a static frontend, a Node.js API, and a PostgreSQL database

Architecture Explanation:

The application follows a standard three-tier architecture:

Frontend (Nginx/Static): A simple UI that runs in a Docker container. It initiates client-side HTTP requests to the Backend API to fetch system status.


Backend (Node.js/Express): Acts as the logic layer. it processes requests from the frontend, communicates with the PostgreSQL database to check connectivity, and returns system metadata.


Database (PostgreSQL): A persistent storage layer running in its own isolated container, accessible only by the backend service to ensure security.

Environment Variables

The application relies on environment variables for configuration to avoid hardcoding sensitive credentials. These are defined in the docker-compose.yml or a .env

CI Pipeline (GitHub Actions):

The project includes a GitHub Actions workflow (ci.yml) to automate the integration process:

Trigger: Automatically executes on every push to the main branch.

Checkout: Pulls the latest code from the repository into a clean virtual environment.

Build: Attempts to build the Docker images for both the Frontend and Backend services.

Validation: If any service fails to build or if dependencies are missing, the pipeline fails, alerting the developer to issues before deployment.

Challenges & Resolutions:

One major challenge faced during development was a CORS (Cross-Origin Resource Sharing) error

Issue: When the Frontend (running on port 80) attempted to call the Backend API (running on port 3000), the browser blocked the request because they were on different ports (origins).

Resolution: I resolved this by installing the cors middleware in the Node.js backend. By adding app.use(cors()) before the API routes, the backend was configured to allow secure requests from the frontend container, enabling successful data communication.
