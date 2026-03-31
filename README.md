# Next.js + Sanity App

A modern, high-performance web application built with **Next.js 16** and **Sanity CMS**, designed for scalability and visual excellence.

## 🚀 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **CMS**: [Sanity.io](https://www.sanity.io/) (v3)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: `tailwindcss-animate`
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 🛠️ Key Features

- **Live Content Preview**: Seamlessly integrated with `next-sanity/live` for real-time content updates.
- **Modern UI/UX**: Premium design aesthetics using Tailwind CSS 4 and Manrope typography.
- **Type Safety**: End-to-end TypeScript support including Sanity schema type generation.
- **SEO Optimized**: Built-in metadata management and semantic HTML structure.
- **Scalable Architecture**: Modular folder structure for Sanity schemas and components.

## 📁 Project Structure

```text
├── src/
│   ├── app/                # Next.js App Router (Website & Studio)
│   │   ├── (website)/      # Front-end pages
│   │   ├── studio/         # Sanity Studio route
│   │   └── types/          # Global TS types & interfaces
│   ├── sanity/             # Sanity CMS configuration
│   │   ├── lib/            # Sanity client, queries, and live-preview setup
│   │   └── schemaTypes/    # Structured schema definitions (Documents, Objects, etc.)
│   └── styles/             # Global styles and Tailwind configuration
├── public/                # Static assets
├── sanity.config.ts        # Main Sanity configurations
└── package.json            # Dependencies and scripts
```

## ⚙️ Getting Started

### 1. Prerequisites

- Node.js >= 24.0.0
- pnpm >= 10.0.0

### 2. Setup Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_READ_TOKEN="your_read_token"
```

### 3. Installation

```bash
pnpm install
```

### 4. Run Development Server

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.
The Sanity Studio will be available at `http://localhost:3000/studio`.

## 📜 Available Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the application for production.
- `pnpm typegen`: Extracts Sanity schema and generates TypeScript types.
- `pnpm lint`: Runs ESLint for code quality.
- `pnpm format`: Formats code using Prettier.

## 🎨 Global Styles

The project uses **Tailwind CSS 4**. Custom theme tokens (breakpoints, animations, typography) are defined in `src/styles/globals.css` using the `@theme inline` syntax.
