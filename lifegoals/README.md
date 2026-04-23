# Life Goals App

A simple Angular 18 application for managing life goals with Firebase Firestore.

## Features

- Add new life goals
- View list of goals
- Delete goals
- Real-time updates from Firestore

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure Firebase in `src/environments/environment.ts`
4. Run the app: `npm start`

## Docker

Build the Docker image locally:

```bash
docker build -t enimgrey/lifegoals:latest lifegoals
```

Run the container locally:

```bash
docker run -p 80:80 enimgrey/lifegoals:latest
```

## GitHub Actions Workflow

The workflow in `.github/workflows/ci.yml` will:

- build the Docker image from the `lifegoals` directory
- log in to Docker Hub using the `enimgrey` account and `DOCKER_PASSWORD` secret
- push `latest` and a commit-specific tag to Docker Hub

Make sure you add the following repository secret in GitHub:

- `DOCKER_PASSWORD`

## Deployment to Render.com

To deploy the image on Render:

1. Push your code to GitHub on the `main` branch.
2. Confirm the workflow successfully pushes the image to Docker Hub.
3. In Render, create a new **Web Service**.
4. Choose **Docker Hub** as the deployment source.
5. Enter the image name: `<dockerhub-username>/lifegoals:latest`.
6. Set the port to `80`.
7. Deploy the service.

Render will pull the Docker image automatically and deploy your Angular app.

