import React, { useEffect, useState } from 'react';
import CardGrid from './CardGrid';
import { shuffleArray } from './utils';
import styled from 'styled-components';

function App() {
  const [cards, setCards] = useState([...Array(8).keys()])

  const onButtonClick = (arr) => {
    setCards(shuffleArray(arr));
    console.log('cards = ' + cards);
  }

  return (
    <Container>
      <CardGrid cardArray={cards}/>
      <ShuffleButton onClick={() => onButtonClick(cards)}>Shuffle</ShuffleButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
`;

const ShuffleButton = styled.button`
  width: 5em;
  height: 2em;
`

export default App;