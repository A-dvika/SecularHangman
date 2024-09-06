import { React, useCallback, useEffect, useState } from "react";
import HangmanDrawing from "./hangmandrawing";
import HangmanWord from "./hangmanword";
import Keyboard from "./keyboard";
import Wordlist from "./wordlist";
import { Box, Button, Text, VStack } from "@chakra-ui/react";

function getWord() {
  return Wordlist[Math.floor(Math.random() * Wordlist.length)];
}

function Hungman() {
  const randomnumber = Wordlist[Math.floor(Math.random() * Wordlist.length)];
  const [wordToGuess, setWordToGuess] = useState(() => randomnumber.word.toLowerCase()); // Convert to lowercase
  const [Hint, setHint] = useState(randomnumber.hint);
  const [guessedLetters, setGuessedLetters] = useState([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter.toLowerCase()) // Compare lowercase letters
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every((letter) => guessedLetters.includes(letter.toLowerCase()));

  const addGuessedLetter = useCallback(
    (letter) => {
      const lowerCaseLetter = letter.toLowerCase();
      if (guessedLetters.includes(lowerCaseLetter) || isLoser || isWinner) return;
      setGuessedLetters((currentLetters) => [...currentLetters, lowerCaseLetter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  const btnrefresh = () => {
    window.location.reload();
  };

  useEffect(() => {
    const handler = (e) => {
      const key = e.key.toLowerCase(); // Convert input key to lowercase
      if (!key.match(/^[a-z]/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e) => {
      const key = e.key;
      if (key !== "Enter") return;
      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord().toLowerCase()); // Set the new word in lowercase
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <Box className="max-w-4xl m-auto items-center">
      {/* Outer container for drawing and game layout */}
      <Box
        w="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={4}
        mb={4}
      >
        {/* Hangman Drawing centered */}
        <Box
          bgGradient="linear(to-r, teal.500, green.500)"
          borderRadius="md"
          p={4}
          mb={6}
          textAlign="center"
          width="50%"  // Adjust drawing size, you can tweak this for larger or smaller screens
        >
          <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        </Box>

        <VStack spacing={4} w="100%" align="stretch">
          <Box
            bgGradient="linear(to-r, purple.500, pink.500)"
            borderRadius="md"
            p={4}
            textAlign="center"
          >
            {isWinner && (
              <Text fontSize="7xl" fontWeight="bold" color="green.600">
                🎉🎊 Congratulations! You Won! 🎊🎉
              </Text>
            )}
            {isLoser && (
              <Text fontSize="7xl" fontWeight="bold" color="red.600">
                😞 Game Over! Better luck next time! 😞
              </Text>
            )}
          </Box>

          {/* Display Hangman Word */}
          <Box
            bgGradient="linear(to-r, blue.500, cyan.500)"
            borderRadius="md"
            p={4}
            textAlign="center"
          >
            <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
          </Box>

          {/* Display Hint */}
          <Box
            bgGradient="linear(to-r, orange.500, yellow.500)" // Gradient background for appeal
            borderRadius="md"
            p={6} // Increase padding for better spacing
            textAlign="center"
            boxShadow="lg" // Adds a shadow for a nice effect
            border="2px solid" // Add a solid border for emphasis
            borderColor="orange.400" // Color of the border
            maxW="100%" // Set a maximum width to control the size
            mx="auto" // Center horizontally
          >
            <Text fontSize="2xl" fontWeight="bold" color="gray.800">
              Hint: {Hint}
            </Text>
          </Box>

          {/* Try Again/Play Again Button Box */}
          <Box
            mt={4}
            p={4}
            textAlign="center"
            boxShadow="lg"
            bg="gray.100"
          >
            {(isWinner || isLoser) && (
              <button
                onClick={btnrefresh}
                style={{
                  backgroundColor: '#3182CE',
                  color: 'white',
                  padding: '10px 20px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#2B6CB0'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#3182CE'}
              >
                {isWinner ? "Play Again" : "Try Again"}
              </button>
            )}
          </Box>




          {/* Expanded Keyboard Section */}
          <Box
            bgGradient="linear(to-r, red.500, yellow.500)"
            borderRadius="md"
            p={4}
            textAlign="center"
            width="100%"  // Make the keyboard span the entire width of the container
          >
            <Keyboard
              activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter.toLowerCase()))} // Ensure lowercase match
              inactiveLetters={incorrectLetters}
              addGuessedLetter={addGuessedLetter}
              disabled={isWinner || isLoser}
              gridTemplateColumns="repeat(auto-fill, minmax(40px, 1fr))" // Ensure dynamic resizing for keyboard buttons
            />
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

export default Hungman;