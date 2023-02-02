import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
  const { number, handleCardClick } = props;

  return (
    <>
      <CardContainer onClick={handleCardClick}>{number}</CardContainer>
    </>
  );
};

const CardContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 5em;
width: 3em;
background-color: gray;
`;

export default Card;