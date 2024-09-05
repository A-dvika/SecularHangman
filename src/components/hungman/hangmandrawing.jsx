import React from 'react';

const HEAD = (
  <div
    style={{
      width: "25px",
      height: "25px",
      borderRadius: "100%",
      border: "5px solid black",
      position: "absolute",
      top: "35px",
      right: "130px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "5px",
      height: "50px",
      background: "black",
      position: "absolute",
      top: "60px",
      right: "140px",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "50px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "75px",
      right: "90px",
      transform: "rotate(-30deg)",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "50px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "75px",
      right: "145px",
      transform: "rotate(30deg)",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "50px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "105px",
      right: "95px",
      transform: "rotate(60deg)",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "50px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "105px",
      right: "140px",
      transform: "rotate(-60deg)",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

function HangmanDrawing({ numberOfGuesses }) {
  return (
    <div style={{ position: "relative", height: "250px", marginLeft: "50px" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      {/* Pole */}
      <div
        style={{
          height: "35px",
          width: "5px",
          background: "black",
          position: "absolute",
          top: 0,
          right: "140px",
        }}
      />
      {/* Overhead Beam */}
      <div
        style={{
          height: "5px",
          width: "100px",
          background: "black",
          position: "absolute",
          top: 0,
          right: "140px",
        }}
      />
      {/* Vertical Support */}
      <div
        style={{
          height: "200px",
          width: "5px",
          background: "black",
          position: "absolute",
          top: 0,
          right: "240px",
        }}
      />
      {/* Base */}
      <div
        style={{
          height: "5px",
          width: "125px",
          background: "black",
          position: "absolute",
          top: "200px",
          right: "120px",
        }}
      />
    </div>
  );
}

export default HangmanDrawing;
