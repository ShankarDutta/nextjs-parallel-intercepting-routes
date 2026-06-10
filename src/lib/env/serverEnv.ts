import { z } from "zod";

const serverEnvSchema = z.object({
  UNSPLASH_ACCESS_KEY: z.string().min(1),
});

export const serverEnv = serverEnvSchema.parse(process.env);
