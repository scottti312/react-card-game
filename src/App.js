import React, { useState, useEffect } from 'react';
import CardGrid from './components/CardGrid';
import Rules from './components/Rules';
import { shuffleArray } from './utils';
import styled from 'styled-components';
import EndGameDisplay from './components/EndGameDisplay';

const NUM_CARDS = 12;

function App() {
  const [cards, setCards] = useState([...Array(NUM_CARDS).keys()].map(i => i + 1));
  const [memory, setMemory] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [hardHighScore, setHardHighScore] = useState(0);
  const [highScoreMet, setHighScoreMet] = useState(false);
  const [lost, setLost] = useState(false);
  const [won, setWon] = useState(false);
  const [hardMode, setHardMode] = useState(false)

  useEffect(() => {
    setCards(shuffleArray(cards));
  }, []);

  const handleHardMode = () => {
    setHardMode(true);
    restart();
    setCards(shuffleArray(['😄', '😆', '😂', '🧐', '😡', '🥰', '🤭', '😵', '😷', '🤥', '😬', '😖']));
  }
  
  const handleEasyMode = () => {
    setHardMode(false);
    restart();
    setCards(shuffleArray([...Array(NUM_CARDS).keys()].map(i => i + 1)));
  }

  const handleCardClick = (e) => {
    const chosenNumber = e.target.textContent;
    if (memory.includes(chosenNumber)) {
      loseScreen();
    } else {
      let newScore = score + 1;
      if (!hardMode && newScore > highScore) {
        setHighScore(newScore);
        setHighScoreMet(true);
      } else if (hardMode && newScore > hardHighScore) {
        setHardHighScore(newScore);
        setHighScoreMet(true);
      }
      setScore(newScore);
      setMemory([...memory, chosenNumber]);
      if (newScore == cards.length) {
        winScreen();
      }
    }
    setCards(shuffleArray(cards));
  };

  const loseScreen = () => {
    setLost(true);
  }

  const winScreen = () => {
    setWon(true);
  }
  
  const restart = () => {
    setCards(shuffleArray(cards))
    setScore(0);
    setMemory([]);
    setLost(false);
    setWon(false);
    setHighScoreMet(false);
  }

  return (
    <Container>
      <div>High Score: {hardMode ? hardHighScore : highScore}</div>
      <div>Score: {score}</div>
      <CardGrid 
        cardArray={cards}
        handleCardClick={lost ? undefined : handleCardClick}
      />
      <EndGameDisplay
        won={won}
        lost={lost}
        hardMode={hardMode}
        highScoreMet={highScoreMet}
        restart={restart}
      />
      {!lost && !won && (<Rules hard={hardMode}/>)}
      {!hardMode && (
      <button onClick={handleHardMode}>Hard Mode</button>
      )}
      {hardMode && (
      <button onClick={handleEasyMode}>Easy Mode</button>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
`;

const RestartButton = styled.button`
  width: 5em;
  height: 2em;
  margin-bottom: 10px;
`

export default App;