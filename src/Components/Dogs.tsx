// Right now these dogs are constant, but in reality we should be getting these from our server
// Todo: Refactor to get rid of props (THERE SHOULD BE NO PROPS DRILLING ON THIS COMPONENT)
import { useDogs } from "./DogProvider";
import { useToggler } from "./TogglerProvider";
import { DogCard } from "./DogCard";
import { Dog } from "../types";

export const Dogs = () => {
  // no props allowed
  const {
    allDogs,
    unfavoritedDogs,
    favoriteDogs,
    deleteDog,
    updateDog,
    isLoading,
  } = useDogs();
  const { toggler } = useToggler();
  let dogs: Dog[] = allDogs;

  if (toggler === "all-dogs") {
    dogs = allDogs;
  }
  if (toggler === "favorited") {
    dogs = favoriteDogs;
  }
  if (toggler === "unfavorited") {
    dogs = unfavoritedDogs;
  }

  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
    <>
      {" "}
      {dogs.map((dog) => {
        return (
          <DogCard
            dog={{
              image: dog.image,
              description: dog.description,
              isFavorite: dog.isFavorite,
              name: dog.name,
              id: dog.id,
            }}
            key={dog.id}
            onTrashIconClick={() => {
              deleteDog(dog.id);
            }}
            onHeartClick={() => {
              updateDog(dog.id, dog.isFavorite);
            }}
            onEmptyHeartClick={() => {
              updateDog(dog.id, dog.isFavorite);
            }}
            isLoading={isLoading}
          />
        );
      })}
    </>
  );
};
