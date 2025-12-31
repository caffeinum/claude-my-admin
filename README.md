# claude-my-admin

**do you trust claude with your production db?**

yes, i trust my claude. introducing: **claude-my-admin** - ai-powered admin panel generator that connects to your database and creates a fully functional dashboard in minutes. think posthog + metabase + sql editor, all open-source and powered by claude code.

🔗 **live demo**: [db-dashboard-4.emergent.host](https://db-dashboard-4.emergent.host/)  
📊 **pitch deck**: [google slides](https://docs.google.com/presentation/d/1eBb39HzG80fPCxlB-kSF7iM5fl_0syLwZzSBUp-3fy4/edit?usp=sharing)

## why claude-my-admin?

skip weeks of boilerplate. connect your database, let ai analyze your schema, and get an instant admin panel with:

- **ai-powered interface**: chat with your database using natural language - ask questions, run queries, and get insights without writing sql
- **auto-generated schema**: drizzle orm schema generated from your live database with full type safety
- **real-time widgets**: dau counter with trend analysis, user activity graphs, top users leaderboard with rankings
- **drag & drop dashboard**: fully customizable widget layouts with react-grid-layout - rearrange, resize, and organize your view
- **modern stack**: next.js 15, postgres, tailwind css, shadcn/ui - production-ready from day one
- **multi-database support**: works with postgresql, mysql, and other sql databases
- **responsive design**: beautiful ui that adapts seamlessly to desktop, tablet, and mobile devices

## how it works

### 1. drop your db connection
paste your postgresql connection url (supports mysql and other sql databases too). the system securely connects to your database and validates the connection. you can configure:
- connection strings for pooled and non-pooled connections
- ssl/tls settings for secure connections
- separate credentials for different environments
- read-only or read-write access levels

### 2. auto-generate schema
ai analyzes your database structure and automatically generates:
- **drizzle orm schema** (`drizzle/schema.ts`) with all tables, columns, and relationships
- **typescript types** for full type safety across your application
- **widget configurations** based on detected data patterns (users table → user widgets, messages table → chat widgets, etc.)
- **next.js template app** with pre-configured routes and layouts
- **database migration files** for version control and schema tracking

the ai identifies common patterns like:
- user tables with authentication fields
- timestamp fields for activity tracking
- relational structures for complex queries
- enum types and constraints

### 3. instant deployment
your admin panel is generated and can be:
- **hosted instantly** at `your-project.claude-my-admin.dev` (if using the hosted service)
- **self-hosted** on your own infrastructure (vercel, railway, docker, etc.)
- **run locally** for development and testing at `localhost:3000`

once deployed, you immediately get:
- live dashboard with all detected widgets
- ai chat interface ready to query your data
- customizable layouts and themes
- real-time data updates from your database

## features

### core functionality

- **ai database assistant**:
  - natural language queries - "show me users who signed up this week"
  - automatic query generation and execution
  - intelligent suggestions based on your schema
  - streaming responses for real-time feedback
  - connected to localhost:7031/chat endpoint via ai sdk

- **comprehensive dashboard**:
  - **general settings widget**: switch between production/staging/development databases on the fly
  - **appearance settings**: customizable theme (light/dark) and language preferences
  - **database server info**: real-time connection details, ssl status, driver versions
  - **web server info**: runtime environment, framework versions, package manager details
  - **app info widget**: version tracking, github repository links, documentation access

### analytics & monitoring

- **daily active users (dau) counter**:
  - real-time user count with percentage change from yesterday
  - trend indicators to track growth or decline
  - auto-updates based on your actual database data

- **dau activity graph**:
  - visual 7-day activity chart with bar graphs
  - percentage-based scaling for easy comparison
  - interactive tooltips with exact user counts
  - helps identify usage patterns and peak days

- **top users leaderboard**:
  - ranked list of most active users by usage metrics
  - displays user avatars, names, and action counts
  - sortable rankings to identify power users
  - useful for community management and user engagement tracking

### customization & layout

- **drag-and-drop interface**:
  - rearrange any widget by dragging to new positions
  - resize widgets to fit your workflow
  - responsive breakpoints for lg (1200px+), md (996px+), and sm (768px+) screens
  - layout preferences persist across sessions

- **modern ui/ux**:
  - shadcn/ui components with tailwind css
  - dot-pattern background for visual depth
  - glass-morphism effects with backdrop blur
  - smooth transitions and hover states
  - accessible color contrast and typography

### technical features

- **type-safe database operations**:
  - drizzle orm with full typescript support
  - auto-generated types from your database schema
  - compile-time query validation
  - prevents common sql injection vulnerabilities

- **multi-environment support**:
  - separate configs for production, staging, and development
  - environment variable management via @next/env
  - pooling and non-pooling connection strings
  - ssl toggle for local development

- **extensible architecture**:
  - widget-based component system
  - easy to add custom widgets in `widgets/` directory
  - standardized card layout with header/content sections
  - react-grid-layout integration for positioning

## what makes claude-my-admin different?

unlike traditional admin panels and bi tools:

### vs traditional admin builders (retool, appsmith)
- ✅ **zero configuration**: no need to manually wire up queries and ui components
- ✅ **ai-first**: natural language queries instead of visual query builders
- ✅ **open-source**: fully own your code, no vendor lock-in
- ✅ **type-safe**: generated typescript types prevent runtime errors

### vs bi tools (metabase, looker)
- ✅ **instant setup**: minutes instead of weeks of configuration
- ✅ **developer-friendly**: built on modern web stack (next.js, react, typescript)
- ✅ **customizable**: full access to source code for unlimited customization
- ✅ **cost-effective**: self-host for free vs expensive per-seat licensing

### vs building from scratch
- ✅ **time-saving**: pre-built widgets and layouts ready to use
- ✅ **best practices**: security, type safety, and performance built-in
- ✅ **ai-powered**: chat interface included, no need to build nlp query engine
- ✅ **extensible**: start with generated app, extend with custom widgets

## example ai queries you can ask

once your dashboard is set up, you can chat with your database using natural language:

```
📊 analytics queries
"show me daily active users for the last 30 days"
"what's our month-over-month growth rate?"
"how many users signed up this week vs last week?"
"which day of the week has the highest user activity?"

👥 user queries
"list the top 10 users by activity"
"show me users who haven't logged in for 30 days"
"find all users who joined in december 2024"
"how many premium vs free users do we have?"

💰 business queries
"what's the total revenue this month?"
"show me all failed payment transactions"
"list subscriptions expiring in the next 7 days"
"which pricing plan is most popular?"

🐛 debugging queries
"show me error logs from the last hour"
"find all jobs that failed to process"
"list users who reported bugs this week"
"what are the most common error messages?"

📈 custom queries
"create a chart of message volume by hour"
"compare active users between staging and production"
"show me the distribution of users by country"
"what's the average session duration?"
```

the ai understands your schema and generates type-safe queries automatically.

## tech stack

- **framework**: next.js 15 (app router)
- **database**: postgres with drizzle orm
- **styling**: tailwind css + shadcn/ui
- **ui library**: react 19
- **grid layout**: react-grid-layout
- **ai sdk**: vercel ai sdk for chat interface
- **icons**: lucide-react
- **typescript**: full type safety throughout

## quick start

### option 1: use the hosted service (recommended)

visit [db-dashboard-4.emergent.host](https://db-dashboard-4.emergent.host/) and follow the 3-step setup:
1. paste your database connection url
2. let ai generate your schema
3. get instant deployment at `your-project.claude-my-admin.dev`

### option 2: self-host with ai agent

**prerequisites**: node.js 18+, pnpm, postgres database

1. clone and install:
```bash
git clone https://github.com/caffeinum/admin-panel.git
cd admin-panel
pnpm install
```

2. run the ai agent to set up everything:
```bash
pnpm run-agent
```

the agent will:
- ask for your database connection details
- analyze your database schema
- generate drizzle orm schema automatically
- set up widgets based on your data
- configure and start the dev server

3. alternatively, manual setup:
```bash
# create .env.local with your postgres connection
POSTGRES_URL=postgresql://user:password@host:port/database
POSTGRES_URL_NON_POOLING=postgresql://user:password@host:port/database
POSTGRES_USER=user
POSTGRES_HOST=host
POSTGRES_PASSWORD=password
POSTGRES_DATABASE=database

# sync schema and run
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

## security & best practices

### database security

- **read-only access recommended**: use read-only database credentials for dashboards to prevent accidental data modifications
- **environment variables**: never commit database credentials to git - use `.env.local` for local development
- **ssl/tls encryption**: enable ssl for production database connections to encrypt data in transit
- **connection pooling**: use pooled connections for better performance and resource management
- **ip whitelisting**: restrict database access to known ip addresses when possible

### ai query safety

- **sql injection prevention**: drizzle orm parameterizes all queries automatically
- **query validation**: ai-generated queries are validated against your schema before execution
- **rate limiting**: implement rate limits on the chat endpoint to prevent abuse
- **audit logging**: all queries can be logged for compliance and debugging

### deployment security

- **authentication**: add authentication (nextauth, clerk, auth0) before exposing to the internet
- **role-based access**: implement rbac to control which users can access which data
- **https only**: always deploy with https in production environments
- **cors configuration**: restrict api access to authorized domains only

## customization

### adding new widgets

1. create a new widget component in `widgets/` directory:
```tsx
// widgets/my-custom-widget.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MyCustomWidget() {
  // fetch your data here
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>my custom metric</CardTitle>
      </CardHeader>
      <CardContent>
        {/* your widget content */}
      </CardContent>
    </Card>
  )
}
```

2. import and add to the dashboard grid layout in `app/page.tsx`:
```tsx
import { MyCustomWidget } from '@/widgets/my-custom-widget'

// add to layout configuration
const layout = {
  lg: [
    // ... existing widgets
    { i: 'my-custom-widget', x: 0, y: 3, w: 2, h: 1 },
  ],
  // ... md and sm breakpoints
}

// add to ResponsiveGridLayout children
<div key="my-custom-widget" className="w-full h-full">
  <MyCustomWidget />
</div>
```

3. configure positions for responsive breakpoints (lg, md, sm)

### styling customization

- **global styles**: edit `app/globals.css` for app-wide styles
- **tailwind config**: modify `tailwind.config.js` to customize colors, fonts, and theme
- **component variants**: use shadcn/ui's class-variance-authority for component variations
- **custom themes**: add dark mode support or custom color schemes
- **background patterns**: customize the dot-pattern background in globals.css

## deployment

deploy to vercel, railway, or any node.js hosting:

```bash
pnpm build
pnpm start
```

ensure your production database credentials are configured in environment variables.

## use cases

### for startups & saas companies

- **instant analytics dashboard**: launch your mvp with production-grade analytics without spending weeks building dashboards
- **investor reporting**: generate real-time metrics for pitch decks and investor updates (dau, mau, growth trends)
- **customer success monitoring**: track user activity, identify churning users, and find expansion opportunities
- **a/b test analysis**: query experiment results using natural language without waiting for data team

### for development teams

- **internal admin tools**: give product managers and support teams safe database access with ai-powered queries
- **debugging & troubleshooting**: quickly investigate production issues by asking questions like "show me all failed payments in the last hour"
- **data exploration**: explore new database schemas without learning the entire data model first
- **migration validation**: verify data integrity after migrations by comparing before/after statistics

### for agencies & consultants

- **client dashboards**: deploy custom analytics dashboards for clients in minutes instead of days
- **white-label solutions**: rebrand and customize for each client's specific needs
- **rapid prototyping**: quickly validate data-driven product ideas before full development
- **cost-effective alternative**: replace expensive bi tools with a self-hosted open-source solution

### for product teams

- **user behavior tracking**: understand how users interact with your product through activity patterns
- **feature adoption metrics**: track which features are used most and identify areas for improvement
- **engagement analytics**: measure dau, wau, mau and retention cohorts without complex sql
- **content moderation**: quickly find and manage user-generated content, reports, and feedback

### for data teams

- **ad-hoc analysis**: run quick queries without setting up jupyter notebooks or sql clients
- **stakeholder self-service**: enable non-technical teammates to answer their own data questions
- **data quality checks**: monitor table row counts, null values, and data freshness
- **schema documentation**: auto-generated schema serves as living documentation for your database

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
