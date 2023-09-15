import { TDogProvider, Dog } from "../types";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { Requests } from "../api";
import { toast } from "react-hot-toast";

const DogContext = createContext<TDogProvider>({} as TDogProvider);

export const DogProvider = ({ children }: { children: ReactNode }) => {
  const [allDogs, setAllDogs] = useState<Dog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = () => {
    return Requests.getAllDogs().then(setAllDogs);
  };
  useEffect(() => {
    fetchData().catch((err) => console.log(err));
  }, []);

  const createDog = (dog: Omit<Dog, "id">) => {
    setIsLoading(true);
    Requests.postDog(dog)
      .then(() => {
        fetchData().catch((err) => console.log(err));
      })
      .then(() => {
        toast.success("You have posted a new dog");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const deleteDog = (id: number) => {
    const updateData = allDogs.filter((dog) => dog.id !== id);

    setAllDogs(updateData);

    Requests.deleteDogRequest(id)
      .then((res) => {
        if (!res.ok) {
          setAllDogs(allDogs);
        } else return;
      })
      .catch((err) => console.log(err));
  };
  const favoriteDogs = allDogs.filter((dog) => dog.isFavorite === true);
  const unfavoritedDogs = allDogs.filter((dog) => dog.isFavorite === false);
  const updateDog = (id: number, favorite: boolean) => {
    const updateData = allDogs.map((dog) =>
      dog.id === id ? { ...dog, isFavorite: !favorite } : dog
    );

    setAllDogs(updateData);
    Requests.patchFavoriteForDog(id, favorite)
      .then((res) => {
        if (!res.ok) {
          setAllDogs(allDogs);
        } else return;
      })
      .catch((err) => console.log(err));
  };

  return (
    <DogContext.Provider
      value={{
        allDogs,
        createDog,
        deleteDog,
        updateDog,
        isLoading,
        favoriteDogs,
        unfavoritedDogs,
      }}
    >
      {children}
    </DogContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDogs = () => useContext(DogContext);
