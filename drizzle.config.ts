import type { Config } from 'drizzle-kit'

export default {
  schema: './lib/drizzle.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: 'postgresql://postgres:postgres@localhost:5432/admin_panel',
  },
} satisfies Config
