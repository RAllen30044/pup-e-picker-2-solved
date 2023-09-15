import { Dog } from "./types";

const baseUrl = "http://localhost:3000";

const getAllDogs = (): Promise<Dog[]> =>
  // fill out method
  fetch(`${baseUrl}/dogs`)
    .then((res) => res.json())
    .then((data: Dog[]) => data);

const postDog = (dog: Omit<Dog, "id">) =>
  fetch(`${baseUrl}/dogs`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(dog),
  });
const deleteDogRequest = (id: number) =>
  fetch(`${baseUrl}/dogs/${id}`, {
    method: "DELETE",
  });
const patchFavoriteForDog = (id: number, favorite: boolean) =>
  fetch(`${baseUrl}/dogs/${id}`, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      isFavorite: !favorite,
    }),
  });

export const Requests = {
  postDog,
  deleteDogRequest,
  patchFavoriteForDog,
  getAllDogs,
};
