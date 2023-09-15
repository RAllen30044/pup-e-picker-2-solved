import { ReactNode } from "react";
import { useToggler } from "./TogglerProvider";
import { useDogs } from "./DogProvider";

export const Section = ({
  label,
  children,
}: {
  // No more props than these two allowed
  label: string;
  children: ReactNode;
}) => {
  const { toggler, setToggler } = useToggler();
  const { favoriteDogs, unfavoritedDogs } = useDogs();

  return (
    <section id="main-section">
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* This should display the favorited count */}
          <div
            className={`selector ${toggler === "favorited" ? "active" : ""}`}
            onClick={() => {
              if (toggler !== "favorited") {
                setToggler("favorited");
                return;
              }
              setToggler("all-dogs");
            }}
          >
            favorited ( {favoriteDogs.length} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            className={`selector ${toggler === "unfavorited" ? "active" : ""}`}
            onClick={() => {
              if (toggler !== "unfavorited") {
                setToggler("unfavorited");
                return;
              }
              setToggler("all-dogs");
            }}
          >
            unfavorited ( {unfavoritedDogs.length} )
          </div>
          <div
            className={`selector ${
              toggler === "create-dog-form" ? "active" : ""
            }`}
            onClick={() => {
              if (toggler !== "create-dog-form") {
                setToggler("create-dog-form");
                return;
              }
              setToggler("all-dogs");
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
