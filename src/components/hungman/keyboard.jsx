import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

// Keys for the keyboard
const KEYS = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z",
];

function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter, disabled = false }) {
  return (
    <SimpleGrid 
      columns={[4, 6, 8]} // Responsive grid: 4 columns on small screens, 6 on medium, 8 on large
      spacing={2} // Reduced spacing
      padding={1} // Reduced padding
    >
      {KEYS.map((key) => {
        const lowerCaseKey = key.toLowerCase();
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
          <button
            key={key}
            onClick={() => addGuessedLetter(lowerCaseKey)}
            disabled={isActive || isInactive || disabled}
            style={{
              backgroundColor: isActive ? "#48BB78" : isInactive ? "#F56565" : "#E2E8F0",
              color: isActive || isInactive ? "#FFFFFF" : "#000000",
              borderRadius: "6px", // Slightly rounded corners
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)", // Subtle shadow
              padding: "6px 10px", // Reduced padding
              fontWeight: "bold",
              textTransform: "uppercase",
              cursor: isActive || isInactive ? "default" : "pointer",
              fontSize: "14px", // Reduced font size
              border: "1px solid #000000",
              transition: "background-color 0.3s, box-shadow 0.3s",
              width: "80px", // Fixed width for rectangle
              height: "50px", // Fixed height for rectangle
            }}
            onMouseOver={(e) => {
              if (!isActive && !isInactive) {
                e.currentTarget.style.backgroundColor = "#EDF2F7";
              }
            }}
            onMouseOut={(e) => {
              if (!isActive && !isInactive) {
                e.currentTarget.style.backgroundColor = "#E2E8F0";
              }
            }}
          >
            {key}
          </button>
        );
      })}
    </SimpleGrid>
  );
}

export default Keyboard;