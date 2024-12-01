import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_SUPABASE_URL: z.string().min(1),
    NEXT_PUBLIC_GA_TAG_ID: z.string().min(1),
  },
  server: {
    SUPABASE_ANON_KEY: z.string().min(1),
    SUPABAE_ADMIN: z.string().min(1),
    DATABASE_URL: z.string().min(1),
    NEXT_PUBLIC_BUCKET_NAME: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    SUPABAE_ADMIN: process.env.SUPABAE_ADMIN,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    NEXT_PUBLIC_GA_TAG_ID: process.env.NEXT_PUBLIC_GA_TAG_ID,
  },
})
