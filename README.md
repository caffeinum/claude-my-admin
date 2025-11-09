# adminpanel

**don't build your admin panel. prompt it.**

ai-powered admin panel generator that connects to your database and creates a fully functional dashboard in minutes. think posthog + metabase + sql editor, all open-source and powered by claude code.

🔗 **live demo**: [db-dashboard-4.emergent.host](https://db-dashboard-4.emergent.host/)

## why adminpanel?

skip weeks of boilerplate. connect your database, let ai analyze your schema, and get an instant admin panel with:

- **ai-powered interface**: chat with your database using natural language
- **auto-generated schema**: drizzle orm schema generated from your live database
- **real-time widgets**: dau counter, user activity graphs, top users leaderboard
- **drag & drop dashboard**: fully customizable widget layouts with react-grid-layout
- **modern stack**: next.js 15, postgres, tailwind css, shadcn/ui

## how it works

### 1. drop your db connection
paste your postgresql connection url. supports mysql and other databases too.

### 2. auto-generate schema
ai analyzes your database and generates a drizzle schema + next.js template app instantly.

### 3. instant deployment
your admin panel is hosted at `your-project.adminpanel.dev`, ready to use immediately.

## features

- **ai assistant**: execute database operations with natural language prompts
- **responsive design**: adaptive layouts for desktop, tablet, and mobile
- **real-time metrics**: 
  - daily active users counter with trend indicators
  - interactive user activity graphs
  - top users leaderboard with rankings
- **modern ui**: shadcn/ui components with tailwind css
- **type-safe queries**: drizzle orm for robust database operations
- **customizable widgets**: drag, drop, and resize dashboard components

## tech stack

- **framework**: next.js 15 (app router)
- **database**: postgres with drizzle orm
- **styling**: tailwind css + shadcn/ui
- **ui library**: react 19
- **grid layout**: react-grid-layout
- **icons**: lucide-react
- **typescript**: full type safety

## quick start

### option 1: use the hosted service (recommended)

visit [db-dashboard-4.emergent.host](https://db-dashboard-4.emergent.host/) and follow the 3-step setup:
1. paste your database connection url
2. let ai generate your schema
3. get instant deployment at `your-project.adminpanel.dev`

### option 2: self-host

**prerequisites**: node.js 18+, pnpm, postgres database

1. clone and install:
```bash
git clone https://github.com/caffeinum/admin-panel.git
cd admin-panel
pnpm install
```

2. configure your database:
```bash
# create .env.local with your postgres connection
POSTGRES_URL=postgresql://user:password@host:port/database
POSTGRES_URL_NON_POOLING=postgresql://user:password@host:port/database
POSTGRES_USER=user
POSTGRES_HOST=host
POSTGRES_PASSWORD=password
POSTGRES_DATABASE=database
```

3. sync schema and run:
```bash
pnpm drizzle-kit push:pg
pnpm dev
```

open [http://localhost:3000](http://localhost:3000) to view your dashboard.

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

deploy to vercel, railway, or any node.js hosting:

```bash
pnpm build
pnpm start
```

ensure your production database credentials are configured in environment variables.

## use cases

- **startup dashboards**: monitor user metrics without building from scratch
- **internal tools**: give your team database access with ai assistance
- **product analytics**: track dau, user behavior, and engagement
- **admin interfaces**: manage users, content, and app data visually

## contributing

this is an open-source project. contributions welcome!

1. fork the repo
2. create a feature branch
3. make your changes
4. submit a pull request

## support

- 📖 [documentation](https://db-dashboard-4.emergent.host/)
- 💬 [community](https://github.com/caffeinum/admin-panel/discussions)
- 🐛 [issues](https://github.com/caffeinum/admin-panel/issues)

## license

mit

---

made with [emergent](https://emergent.host)
