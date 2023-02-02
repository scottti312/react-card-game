import React, { useState, useEffect } from 'react';
import CardGrid from './CardGrid';
import Rules from './Rules';
import { shuffleArray } from './utils';
import styled from 'styled-components';

function App() {
  const [cards, setCards] = useState([...Array(12).keys()]);
  const [memory, setMemory] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

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
      }
      setScore(newScore);
      setMemory([...memory, chosenNumber]);
    }
    setCards(shuffleArray(cards));
    console.log(memory);
  };

  const loseScreen = () => {
    setScore(0);
    setMemory([]);
    console.log('You lose!');
  }

  return (
    <Container>
      <div>High Score: {highScore}</div>
      <div>Score: {score}</div>

      <CardGrid cardArray={cards} handleCardClick={handleCardClick}/>
      <RestartButton onClick={loseScreen}>Restart</RestartButton>
      <Rules/>
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