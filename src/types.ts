import { z } from "zod";

export const dogSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
  description: z.string(),
  isFavorite: z.boolean(),
});
export type TDogProvider = {
  createDog: (dog: Omit<Dog, "id">) => void;
  isLoading: boolean;
  allDogs: Dog[];
  deleteDog: (id: number) => void;
  updateDog: (id: number, favorite: boolean) => void;
  favoriteDogs: Dog[];
  unfavoritedDogs: Dog[];
};
export type TToggleProvider = {
  toggler: "favorited" | "unfavorited" | "all-dogs" | "create-dog-form";
  setToggler: (
    input: "favorited" | "unfavorited" | "all-dogs" | "create-dog-form"
  ) => void;
};

export type ActiveComponent =
  | "all-dogs"
  | "favorited-dogs"
  | "unfavorited-dogs"
  | "create-dog-form";

export type Dog = z.infer<typeof dogSchema>;
