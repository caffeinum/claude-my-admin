import { pgTable, uniqueIndex, serial, text, timestamp } from "drizzle-orm/pg-core"
import { InferSelectModel, InferInsertModel } from 'drizzle-orm'

export const profiles = pgTable("profiles", {
	id: serial("id").primaryKey().notNull(),
	name: text("name").notNull(),
	email: text("email").notNull(),
	image: text("image").notNull(),
	createdAt: timestamp("createdAt", { mode: 'string' }).defaultNow().notNull(),
},
(table) => {
	return {
		uniqueIdx: uniqueIndex("unique_idx").on(table.email),
	}
});

export type User = InferSelectModel<typeof profiles>
export type NewUser = InferInsertModel<typeof profiles>