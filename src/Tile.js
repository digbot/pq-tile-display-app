// src/Tile.js
import React from 'react';

const Tile = ({ type, question, answer, example }) => {
  return (
    <div className="tile">
      <h2>{type}</h2>
      <p><strong>Question:</strong> {question}</p>
      <p><strong>Answer:</strong> {answer}</p>
      <pre><strong>Example:</strong> {example}</pre>
    </div>
  );
};

export default Tile;
