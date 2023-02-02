import React, { useState, useEffect, useSyncExternalStore } from 'react';
import CardGrid from './CardGrid';
import Rules from './Rules';
import { shuffleArray } from './utils';
import styled from 'styled-components';

function App() {
  const [cards, setCards] = useState([...Array(12).keys()].map(i => i + 1));
  const [memory, setMemory] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [highScoreMet, setHighScoreMet] = useState(false);
  const [lost, setLost] = useState(false);

  useEffect(() => {
    setCards(shuffleArray(cards));
  }, []);

  const handleCardClick = (e) => {
    const chosenNumber = e.target.textContent;
    if (memory.includes(chosenNumber)) {
      loseScreen();
    } else {
      let newScore = score + 1;
      if (newScore > highScore) {
        setHighScore(newScore);
        setHighScoreMet(true);
      }
      setScore(newScore);
      setMemory([...memory, chosenNumber]);
    }
    setCards(shuffleArray(cards));
    console.log(memory);
  };

  const loseScreen = () => {
    setLost(true);
  }
  
  const restart = () => {
    setCards(shuffleArray(cards))
    setScore(0);
    setMemory([]);
    setLost(false);
    setHighScoreMet(false);
  }

  return (
    <Container>
      <div>High Score: {highScore}</div>
      <div>Score: {score}</div>

      <CardGrid 
        cardArray={cards}
        handleCardClick={lost ? undefined : handleCardClick}
      />
      {lost && (
        <>
          <div>You lose.</div>
          {highScoreMet && (<div>New high score!</div>)}
          <RestartButton onClick={restart}>Restart</RestartButton>
        </>
      )}
      {!lost && (<Rules/>)}
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
  margin-bottom: 50px;
`

export default App;