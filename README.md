# admin panel

a modern, customizable admin dashboard built with next.js, postgres, and drizzle orm. features a drag-and-drop widget system with responsive grid layouts for monitoring application metrics.

## features

- **drag & drop dashboard**: customizable widget layout with react-grid-layout
- **responsive design**: adaptive layouts for desktop, tablet, and mobile
- **real-time widgets**: 
  - daily active users counter with trend indicators
  - user activity graph visualization
  - top users leaderboard
- **modern ui**: shadcn/ui components with tailwind css
- **database integration**: postgres with drizzle orm for type-safe queries
- **dot grid background**: subtle visual pattern for enhanced aesthetics

## tech stack

- **framework**: next.js 15 (app router)
- **database**: postgres with drizzle orm
- **styling**: tailwind css + shadcn/ui
- **ui library**: react 19
- **grid layout**: react-grid-layout
- **icons**: lucide-react
- **typescript**: full type safety

## getting started

### prerequisites

- node.js 18+ and pnpm
- postgres database

### installation

1. clone the repository:
```bash
git clone https://github.com/caffeinum/admin-panel.git
cd admin-panel
```

2. install dependencies:
```bash
pnpm install
```

3. set up your database:
```bash
# create a .env.local file with your database url
DATABASE_URL="your-postgres-connection-string"

# run database migrations
pnpm drizzle-kit push:pg
```

4. run the development server:
```bash
pnpm dev
```

open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## project structure

```
admin-panel/
├── app/                # next.js app router
│   ├── dashboard/      # dashboard page with widget grid
│   └── layout.tsx      # root layout
├── components/         # reusable ui components
│   └── ui/            # shadcn/ui components
├── widgets/           # dashboard widget components
│   ├── dau-counter.tsx
│   ├── dau-graph.tsx
│   └── top-users.tsx
├── drizzle/           # database schema and migrations
│   └── schema.ts      # user profiles table
└── lib/               # utility functions and db client
```

## customization

### adding new widgets

1. create a new widget component in `widgets/`
2. add the widget to the dashboard grid layout in `app/dashboard/page.tsx`
3. configure the layout positions for different breakpoints

### styling

- global styles: `app/globals.css`
- tailwind config: `tailwind.config.js`
- component variants: using shadcn/ui's class-variance-authority

## deployment

the app is ready for deployment on vercel:

```bash
pnpm build
```

ensure your production database is configured in your deployment environment.

## license

mit
