function HangmanWord({ guessedLetters, wordToGuess, reveal }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center",     // Center vertically
        flexWrap: "wrap",         // Allow wrapping of words in case of long phrases
        gap: ".5em",              // Small gap between letters
        fontSize: "3rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
        padding: "10px",          // Add some padding for spacing around the content
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span
          key={index}
          style={{
            borderBottom: letter === " " ? "none" : ".1em solid black", // No underline for spaces
            marginRight: letter === " " ? "0.3em" : ".1em", // Add larger gap between words (spaces)
            paddingBottom: "5px",  // Padding below the letters for better spacing
          }}
        >
          <span
            style={{
              visibility:
                guessedLetters.includes(letter.toLowerCase()) || reveal
                  ? "visible"
                  : "hidden", // Show the letter if guessed or reveal is true
              color:
                !guessedLetters.includes(letter.toLowerCase()) && reveal
                  ? "red"
                  : "black", // Incorrect letters appear in red
            }}
          >
            {letter === " " ? "\u00A0" : letter} {/* Render non-breaking space for spaces */}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
