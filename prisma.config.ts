// Prisma configuration file.
// Reads environment variables from .env.local (Next.js convention).
import { loadEnvFile } from "node:process";
import { defineConfig } from "prisma/config";

// Manually load .env.local so Prisma CLI picks it up (it doesn't read it natively).
try {
  loadEnvFile(".env.local");
} catch {
  // .env.local may not exist in CI/CD; fall through to system env.
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    db: {
      provider: "postgresql",
      url: process.env["DATABASE_URL"],
      directUrl: process.env["DIRECT_URL"],
    },
  },
});
