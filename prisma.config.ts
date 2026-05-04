import { loadEnvFile } from "node:process";
import { defineConfig, env } from "prisma/config";

// Manually load .env.local for Prisma CLI
try {
  loadEnvFile(".env.local");
} catch {
  // .env.local may not exist in CI
}

type Env = {
  DATABASE_URL: string;
  DIRECT_URL: string;
};

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env<Env>("DIRECT_URL"),
  },
});
