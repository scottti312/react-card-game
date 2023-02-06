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
font-size: 2.5em;
height: 4em;
width: 3em;
border-radius: 5px;
border: 1px solid black;
box-shadow: 1px 0px 8px 2px rgba(0,0,0,0.45);
background-color: #fffaaa;
color: #000;
transition: all 0.2s ease-out;

&:hover {
  background-color: lightblue;
}
`;

export default Card;