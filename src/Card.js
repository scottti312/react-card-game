import React, { useState } from 'react';
import styled from 'styled-components';

const Card = (props) => {
  const { number } = props;

  return (
    <>
      <CardContainer>{number}</CardContainer>
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