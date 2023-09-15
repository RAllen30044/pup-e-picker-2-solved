import { Section } from "./Components/Section";
import { CreateDogForm } from "./Components/CreateDogForm";
import { Dogs } from "./Components/Dogs";
import { useToggler } from "./Components/TogglerProvider";

export function App() {
  const { toggler } = useToggler();
  const page = () => {
    return (
      <>
        {toggler !== "create-dog-form" && <Dogs />}
        {toggler === "create-dog-form" && <CreateDogForm />}
      </>
    );
  };

  return (
    <div className="App" style={{ backgroundColor: "skyblue" }}>
      <header>
        <h1>pup-e-picker (Functional)</h1>
      </header>
      <Section label={"Dogs: "} children={page()}></Section>
    </div>
  );
}
