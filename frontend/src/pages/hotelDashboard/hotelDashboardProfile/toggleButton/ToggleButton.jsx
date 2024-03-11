import { useState } from "react";

import { ToggleButton, ToggleContainer } from "./styles.ts";

const ToggleButtons = () => {
  // Initialize the state with false for each button indicating that they are not toggled
  const [toggles, setToggles] = useState([
    { name: "Day Care", isSelected: false },
    { name: "Hotel Pet", isSelected: false },
    { name: "Hotel Pet Friendly", isSelected: false },
  ]);

  const handleToggle = (index) => {
    // Update the state of the toggled button
    const newToggles = toggles.map((toggle, i) =>
      i === index ? { ...toggle, isSelected: !toggle.isSelected } : toggle
    );
    setToggles(newToggles);
  };

  return (
    <ToggleContainer>
      {toggles.map((isToggled, index) => (
        <ToggleButton
          key={index}
          onClick={() => handleToggle(index)}
          isToggled={isToggled.isSelected}
        >
          {isToggled.name}
        </ToggleButton>
      ))}
    </ToggleContainer>
  );
};

export default ToggleButtons;
