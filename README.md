Full-Stack DevOps Project -
This project is a containerized full-stack application consisting of a Node.js backend, a PostgreSQL database, and a static Frontend. It demonstrates a complete automated deployment workflow using Docker and GitHub Actions.

🚀 Features
Containerization: Entire environment managed via Docker Compose for consistency across machines.

Database Integration: Automated schema initialization with PostgreSQL.

CI/CD Pipeline: Automated build and dependency testing via GitHub Actions.

Health Monitoring: Built-in API status endpoint to verify system health.

🛠️ Tech Stack
Backend: Node.js, Express.js.

Database: PostgreSQL 15.

Infrastructure: Docker, Docker Compose.

CI/CD: GitHub Actions.

🏃 Getting Started
Prerequisites
Docker Desktop installed.

Git installed.

Challenges & Solutions
During the development of this project, I encountered and resolved several DevOps-specific hurdles:

DNS Resolution: Fixed npm install timeout errors within Docker by configuring the Docker Engine with public Google DNS (8.8.8.8).

Container Networking: Resolved "Module Not Found" errors by synchronizing local node_modules and utilizing host-level networking during builds.
