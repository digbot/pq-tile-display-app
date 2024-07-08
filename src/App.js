// src/App.js
import React, { useEffect, useState } from 'react';
import yaml from 'js-yaml';
import Tile from './Tile';
import './App.css';

const App = () => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.yml');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        const data = yaml.load(text);
        setTiles(data);
      } catch (error) {
        console.error('Failed to fetch and parse YAML data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          type={tile.type}
          question={tile.question}
          answer={tile.answer}
          example={tile.example}
        />
      ))}
    </div>
  );
};

export default App;
