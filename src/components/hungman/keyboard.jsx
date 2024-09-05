import React from "react";
import { Button, SimpleGrid } from "@chakra-ui/react";

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
      spacing={3} 
      padding={2}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
         
<Button
key={key}
onClick={() => addGuessedLetter(key)}
disabled={isActive || isInactive || disabled}
bg={isActive ? "blue.500" : isInactive ? "brown.400" : "green"}
color={isActive || isInactive ? "orange" : "black"}
_hover={{
  bg: isActive ? "blue.600" : isInactive ? "brown.500" : "green.200",
}}
border="2px solid"
borderColor="black"
size="lg"
aspectRatio="3" // Aspect ratio to keep buttons square
fontWeight="bold"
textTransform="uppercase"
cursor="pointer"
fontSize="lg"
>
{key}
</Button>

        );
      })}
    </SimpleGrid>
  );
}

export default Keyboard;


