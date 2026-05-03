import { loadEnvFile } from "node:process";
import { defineConfig } from "prisma/config";

// Manually load .env.local for Prisma CLI
try {
  loadEnvFile(".env.local");
} catch {
  // .env.local may not exist in CI
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL,
    // @ts-ignore - Prisma 6 CLI requires directUrl here for Supabase migrations,
    // but the property is currently missing from the @prisma/config types.
    directUrl: process.env.DIRECT_URL,
  },
});
