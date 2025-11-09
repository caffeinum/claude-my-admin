# Database Setup

## connecting new database

1. set up your `.env.local` with database credentials:
```
POSTGRES_URL=postgresql://user:password@host:port/database
POSTGRES_URL_NON_POOLING=postgresql://user:password@host:port/database
POSTGRES_USER=user
POSTGRES_HOST=host
POSTGRES_PASSWORD=password
POSTGRES_DATABASE=database
```

2. push schema to database:
```bash
pnpm drizzle-kit push:pg
```
