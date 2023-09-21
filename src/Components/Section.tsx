import { ReactNode } from "react";
import { useActiveComponent } from "./ActiveComponentProvider";
import { useDogs } from "./DogProvider";

export const Section = ({
  label,
  children,
}: {
  // No more props than these two allowed
  label: string;
  children: ReactNode;
}) => {
  const { activeComponent, SwitchActiveComponent } = useActiveComponent();
  const { favoriteDogs, unfavoritedDogs } = useDogs();

  return (
    <section id="main-section">
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* This should display the favorited count */}
          <div
            className={`selector ${
              activeComponent === "favorited" ? "active" : ""
            }`}
            onClick={() => {
              SwitchActiveComponent("favorited");
            }}
          >
            favorited ( {favoriteDogs.length} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            className={`selector ${
              activeComponent === "unfavorited" ? "active" : ""
            }`}
            onClick={() => {
              SwitchActiveComponent("unfavorited");
            }}
          >
            unfavorited ( {unfavoritedDogs.length} )
          </div>
          <div
            className={`selector ${
              activeComponent === "create-dog-form" ? "active" : ""
            }`}
            onClick={() => {
              SwitchActiveComponent("create-dog-form");
            }}
          >
            create dog
          </div>
        </div>
      </div>
      <div className="content-container">{children}</div>
    </section>
  );
};
