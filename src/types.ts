import { z } from "zod";

export const dogSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
  description: z.string(),
  isFavorite: z.boolean(),
});


export type ActiveComponent =
  | "all-dogs"
  | "favorited-dogs"
  | "unfavorited-dogs"
  | "create-dog-form";

export type Dog = z.infer<typeof dogSchema>;
