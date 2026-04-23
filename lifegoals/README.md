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

Build the Docker image: `docker build -t lifegoals .`

Run the container: `docker run -p 80:80 lifegoals`

## Deployment

Deploy to Render.com using the Docker image.
