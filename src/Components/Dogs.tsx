// Right now these dogs are constant, but in reality we should be getting these from our server
// Todo: Refactor to get rid of props (THERE SHOULD BE NO PROPS DRILLING ON THIS COMPONENT)
import { useDogs } from "./DogProvider";
import { useActiveComponent } from "./ActiveComponentProvider";
import { DogCard } from "./DogCard";

export const Dogs = () => {
  // no props allowed
  const { deleteDog, updateDog, isLoading, dogs } = useDogs();
  const { activeComponent } = useActiveComponent();
  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
    <>
      {" "}
      {dogs(activeComponent).map((dog) => {
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
