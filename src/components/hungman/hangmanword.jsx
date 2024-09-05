function HangmanWord({guessedLetters,wordToGuess,reveal}) {

    return (
      <div
        style={{
          height:"fit-content",
          display: "flex",
          marginTop:"20px",
          marginLeft :"40px",
          gap: ".25em",
          fontSize: "3rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          fontFamily: "monospace",
        }}
      >
        {wordToGuess.split("").map((letter, index) => (
          <span style={{ borderBottom: ".1em solid black" }} key={index}>
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) 
                   || reveal
                    ? "visible"
                    : "hidden",
                 color:
                   !guessedLetters.includes(letter) && reveal ? "red" : "black",
              }}
            >
              {letter}
            </span>
          </span>
        ))}
      </div>
    );
  }
  export default HangmanWord;
  