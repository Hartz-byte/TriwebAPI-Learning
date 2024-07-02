import React from "react";

export default function Square({ value, onSquareClick }) {
  return (
    <button
      className="square"
      style={{ width: "25px", height: "25px", margin: 1 }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
