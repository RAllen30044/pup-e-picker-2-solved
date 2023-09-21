import { useState } from "react";
import { dogPictures } from "../dog-pictures";
import { useDogs } from "./DogProvider";
import toast from "react-hot-toast";

export const CreateDogForm = () =>
  // no props allowed
  {
    const { createDog, isLoading } = useDogs();

    const [nameInput, setNameInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");
    const [selectedImage, setSelectedImage] = useState(dogPictures.BlueHeeler);

    return (
      <form
        action=""
        id="create-dog-form"
        onSubmit={(e) => {
          e.preventDefault();
          createDog({
            name: nameInput,
            description: descriptionInput,
            image: selectedImage,
            isFavorite: false,
          })
            .then(() => {
              setDescriptionInput("");
              setNameInput("");
            })
            .catch(() => {
              toast.error("Uh oh! Something is broken");
            });
        }}
      >
        <h4>Create a New Dog</h4>
        <label htmlFor="name">Dog Name</label>
        <input
          type="text"
          value={nameInput}
          onChange={(e) => {
            setNameInput(e.target.value);
          }}
          autoComplete="on"
          required
        />
        <label htmlFor="description">Dog Description</label>
        <textarea
          name=""
          id=""
          cols={80}
          rows={10}
          value={descriptionInput}
          onChange={(e) => {
            setDescriptionInput(e.target.value);
          }}
          required
        ></textarea>
        <label htmlFor="picture">Select an Image</label>
        <select
          id=""
          onChange={(e) => {
            setSelectedImage(e.target.value);
          }}
        >
          {Object.entries(dogPictures).map(([label, pictureValue]) => {
            return (
              <option value={pictureValue} key={pictureValue}>
                {label}
              </option>
            );
          })}
        </select>
        <input type="submit" value="submit" disabled={isLoading} />
      </form>
    );
  };
