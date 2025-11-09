# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## project overview

admin dashboard built with next.js 15 and postgres. features drag-and-drop widget system for monitoring app metrics. uses drizzle orm for type-safe database queries.

## development commands

```bash
pnpm dev              # start dev server on localhost:3000
pnpm build            # production build
pnpm start            # start production server
pnpm lint             # run linter
```

## database commands

```bash
pnpm drizzle-kit push:pg    # push schema changes to postgres
pnpm drizzle-kit generate   # generate migrations
```

## architecture

### widget system
- dashboard uses react-grid-layout for drag-and-drop widgets
- widgets are client components in `widgets/` directory
- layout config defined in `app/page.tsx` with responsive breakpoints (lg, md, sm)
- each widget is wrapped in a grid item with unique key

### database structure
- schema defined in `drizzle/schema.ts` (pulled from production supabase db)
- includes tables for users, messages, subscriptions, payments, jobs, feedback
- drizzle client initialized in `lib/drizzle.ts`
- uses postgres.js with ssl disabled for local dev

### chat component
- client-side chat component at `components/chat.tsx`
- connects to localhost:7031/chat endpoint using ai sdk
- fixed position overlay in bottom-right of dashboard
- uses ai sdk's DefaultChatTransport for streaming responses

### environment setup
- env vars loaded via `env.ts` using @next/env
- required vars in `.env.local`:
  - POSTGRES_URL (connection string)
  - POSTGRES_URL_NON_POOLING
  - POSTGRES_USER, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_DATABASE

### component structure
- uses shadcn/ui components in `components/ui/`
- tailwind css with custom dot grid background pattern
- app router structure: `app/page.tsx` (dashboard), `app/demo/page.tsx` (postgres demo)

## adding new widgets

1. create widget component in `widgets/`
2. import and add to ResponsiveGridLayout in `app/page.tsx`
3. define layout positions for lg/md/sm breakpoints
4. wrap in div with unique key prop

## database workflow

when connecting to new database:
1. update `.env.local` with connection string
2. run `pnpm drizzle-kit push:pg` to sync schema
3. schema is in `drizzle/schema.ts`, drizzle config points to `lib/drizzle.ts`

## common issues & fixes

### typescript type guards with ai sdk
when filtering message parts from ai sdk's useChat hook, use proper type guard to avoid typescript errors:
```typescript
// ❌ wrong - typescript can't infer type
message.parts.filter((part) => part.type === 'text')

// ✅ correct - explicit type guard
message.parts.filter((part): part is Extract<typeof part, { type: 'text' }> => part.type === 'text')
```

### drizzle schema imports
- schema is pulled from production supabase database
- available tables: users, messages, subscriptions, manualPayments, stripePayments, tributePayments, jobQueue, feedbackReports, systemConfig, promptVersions, tributeExport
- note: there is no `profiles` table - use `users` table instead
- when using drizzle count aggregations, import `count` from `drizzle-orm` not from `drizzle-orm/pg-core`
