import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const CardGrid = ({ cardArray, handleCardClick }) => {
  return (
    <CardGridContainer>
      {cardArray.map(card => (
        <Card key={card} number={card} handleCardClick={handleCardClick}>{card}</Card>
      ))}
    </CardGridContainer>
  );
};

const CardGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1em;
`

export default CardGrid;