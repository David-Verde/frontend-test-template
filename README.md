# GamerShop - Front-End Developer Challenge

This repository contains the solution for the Apply Digital Front-End Developer test. It is a responsive e-commerce web application for a video game store, built with Next.js, TypeScript, and Tailwind CSS.

[![Vercel Deploy](https://vercel.com/button)](https://frontend-test-template-2qmc1zo59-davidverdes-projects.vercel.app/)

## Live Demo

**You can view the live deployed application here:** [**GamerShop Live**](https://frontend-test-template-2qmc1zo59-davidverdes-projects.vercel.app/)

---

## Features

- **Responsive Design**: Fully responsive UI that adapts to desktop, tablet, and mobile screens.
- **Game Catalog**: Browse a list of games fetched from a local API endpoint.
- **Genre Filtering**: Filter the game list by genre. The selected filter is reflected in the URL.
- **"See More" Pagination**: Load more games without a full page reload.
- **Persistent Shopping Cart**: Add or remove items from the cart. The cart's state is saved in `localStorage` and persists across browser sessions.
- **Detailed Cart Page**: A dedicated `/cart` page showing all selected items and a complete order summary.
- **Unit Tests**: Key application logic and components are covered by unit tests using Jest and React Testing Library.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Testing**: [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ad-frontend-test.git
cd ad-frontend-test
```

### 2. Install dependencies

This project uses `npm` as the package manager.

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root of the project and add the following variable. The application's local API runs on this URL by default.

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### 4. Run the development server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

---

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts a production server.
- `npm run lint`: Runs the linter.
- `npm run test`: Runs unit tests.

The detailed instructions and requirements for this test are defined in the [`CHALLENGE.md`](/CHALLENGE.md) file. Please read it carefully before you start.


