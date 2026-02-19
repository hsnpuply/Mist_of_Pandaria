# Mist of Pandaria Landing (Vue 3 + TypeScript + Vite)

A simple World of Warcraft themed landing page built with Vue 3 and TypeScript.

## Architecture

This project now follows a lightweight **MVC** structure:

- **Model**: static domain data and types in `src/models/landing.ts`
- **View**: Vue single-file components in `src/views` and `src/components`
- **Controller**: page orchestration/computed UI data in `src/controllers/useLandingController.ts`

## Scripts

- `yarn dev` — run local development server
- `yarn build` — type-check and build for production
- `yarn preview` — preview production build
