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
  const [wordToGuess, setWordToGuess] = useState(() => randomnumber.word);
  const [Hint, setHint] = useState(randomnumber.hint);
  const [guessedLetters, setGuessedLetters] = useState([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  const btnrefresh = () => {
    window.location.reload();
  };

  useEffect(() => {
    const handler = (e) => {
      const key = e.key;
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
      setWordToGuess(getWord());
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <Box className="max-w-4xl flex flex-row gap-2 m-auto items-center">
      <Box
        w="33%"
        bgGradient="linear(to-r, teal.500, green.500)"
        borderRadius="md"
        p={4}
        textAlign="center"
      >
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      </Box>

      <Box w="66%">
        <VStack spacing={4} align="stretch">
          <Box
            bgGradient="linear(to-r, purple.500, pink.500)"
            borderRadius="md"
            p={4}
            textAlign="center"
          >
            {isWinner && <Text fontSize="2xl" fontWeight="bold" color="green.600">Winner!! - Refresh the page to try again..</Text>}
            {isLoser && <Text fontSize="2xl" fontWeight="bold" color="red.600">You Lost, Nice Try!! - Refresh the page to try again..</Text>}
          </Box>

          <Box
            bgGradient="linear(to-r, blue.500, cyan.500)"
            borderRadius="md"
            p={4}
            textAlign="center"
          >
            <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
          </Box>

          <Box
            bgGradient="linear(to-r, orange.500, yellow.500)"
            borderRadius="md"
            p={4}
            textAlign="center"
          >
            <Text fontSize="2xl" fontWeight="bold" color="gray.700">{Hint}</Text>
            {isLoser && (
              <Button colorScheme="blue" onClick={btnrefresh} mt={4}>
                Try again
              </Button>
            )}
          </Box>

          <Box
            bgGradient="linear(to-r, red.500, yellow.500)"
            borderRadius="md"
            p={4}
            textAlign="center"
          >
            <Keyboard
              activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
              inactiveLetters={incorrectLetters}
              addGuessedLetter={addGuessedLetter}
              disabled={isWinner || isLoser}
            />
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

export default Hungman;
