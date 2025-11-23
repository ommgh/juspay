# Dashboard — UI Engineer Assignment

A clean, performant, and fully responsive **Next.js + TypeScript** dashboard built for the UI Engineer role. The project focuses on clean component architecture, pixel‑perfect UI using **TailwindCSS** and **@shadcn/ui**, and a scalable code structure suited for production-grade dashboards.

---

## Tech Stack

* **Next.js (App Router)** — Server Components, optimized routing
* **TypeScript** — Type‑safe development
* **TailwindCSS** — Utility‑first styling
* **@shadcn/ui** — Accessible, customizable UI components
* **Bun** — Fast package manager & dev environment

---

## Project Structure

```
juspay/
├── public/
├── src/
│ ├── app/
│ │ ├── api/orders/ # API route for orders
│ │ ├── orders/ # Orders page
│ │ ├── favicon.ico
│ │ ├── globals.css
│ │ ├── layout.tsx
│ │ └── page.tsx # Dashboard Home
│ │
│ ├── components/
│ │ ├── dashboard/ # Dashboard widgets, cards, charts
│ │ ├── effects/ # UI animations/effects
│ │ ├── sidebar/ # Sidebar navigation components
│ │ ├── table/ # Table component, sorting, pagination
│ │ └── ui/ # Primitive UI Components
│ │ ├── theme-provider.tsx
│ │ └── theme-toggler.tsx
│ │
│ ├── hooks/ # Custom hooks (useIsMobile, usePagination)
│ └── lib/ # Utilities, helpers
│
├── .gitignore
├── biome.json
├── bun.lock
├── components.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

---

## Features

### Fully Responsive Dashboard

* Pixel-perfect across desktop, tablet, and mobile screens

### Data Table

* Sorting
* Filtering
* Pagination
* Mobile‑friendly table without breaking layout

### Clean Component Architecture

* Reusable UI components
* Server/Client component split for performance
* DRY & maintainable table config using `ColumnDef`

### Configurable Pagination Controls

* Works with server or client data
* Dynamic highlighting of active page
* Disabled next/prev based on page availability

### Modern UI Styling

* TailwindCSS + shadcn/ui components
* Consistent design tokens & spacing
* Accessible interactions

---

## Installation

### Clone the repository

```bash
git clone https://github.com/ommgh/juspay
cd juspay
```

### Install dependencies (Bun)

```bash
bun install
```

---

## Running the Project

### Development

```bash
bun dev
```

### Build

```bash
bun run build
```

### Start

```bash
bun start
```

---
