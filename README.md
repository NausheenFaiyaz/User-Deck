# FreeAPI Random Users UI

A React + Vite web app that fetches and displays random user profiles from the FreeAPI Random Users endpoint in a custom pink card-style UI inspired by your reference design.

## Live Demo

- Deployed Project: https://user-deck-dun.vercel.app/

## Project Overview

This project was built for the **Web Dev Cohort 2026** assignment using the FreeAPI Random Users service.  
The app fetches user data page-by-page and renders a clean card grid with key profile details.

### API Used

- Endpoint: `https://api.freeapi.app/api/v1/public/randomusers`
- Query params used:
  - `page` for pagination
  - `limit=9` to show exactly 9 cards per page

## Features

- Fetches real-time random user data from FreeAPI
- Displays **9 user cards per page**
- Custom profile cards with:
  - Profile image
  - Full name
  - Username
  - Location (`city, state, country`)
  - Email
  - Phone
  - Age
  - Gender
- Font Awesome icons for profile fields
- Previous/Next pagination controls
- Loading state
- Error state with retry button
- Fully responsive grid:
  - Desktop: 3 columns
  - Tablet: 2 columns
  - Mobile: 1 column

## Tech Stack

- React 19
- Vite 8
- CSS3
- Font Awesome React

## Folder Structure

```text
src/
  components/
    Header.jsx
    Pagination.jsx
    UserCard.jsx
    UserGrid.jsx
  App.jsx
  App.css
  index.css
  main.jsx
```

## Component Breakdown

- `App.jsx`
  - Handles API fetching, pagination state, loading/error logic, and composition of UI components.
- `Header.jsx`
  - Renders top themed window header.
- `Pagination.jsx`
  - Reusable pagination controls (Previous/Next + page indicator).
- `UserGrid.jsx`
  - Renders list of cards from users array.
- `UserCard.jsx`
  - Renders each user profile and related icon-based detail rows.

## Getting Started Locally

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd Random-Users-UI
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open the local URL printed in terminal (usually `http://localhost:5173`).

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

## Scripts

- `npm run dev` - start local dev server
- `npm run build` - generate production build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint checks

## Deployment

This project is deployed on **Vercel**:

- https://user-deck-dun.vercel.app/

## Author

Built by **Nausheen Faiyaz** as part of FreeAPI UI practice and cohort assignment work.
