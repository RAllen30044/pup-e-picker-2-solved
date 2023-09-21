import { Section } from "./Components/Section";
import { CreateDogForm } from "./Components/CreateDogForm";
import { Dogs } from "./Components/Dogs";
import { useActiveComponent } from "./Components/ActiveComponentProvider";

export function App() {
  const { activeComponent } = useActiveComponent();
  const page = () => {
    return (
      <>
        {activeComponent !== "create-dog-form" && <Dogs />}
        {activeComponent === "create-dog-form" && <CreateDogForm />}
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
