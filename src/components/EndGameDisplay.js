import React from 'react';
import styled from 'styled-components';

const EndGameDisplay = ({ won, lost, hardMode, highScoreMet, restart }) => {
  return (
    <>
      {(won || lost) && (
        <>
          {!hardMode && <div>{won ? "You won!" : "You lose."}</div>}
          {won && hardMode && <div>You won hard mode!!</div>}
          {highScoreMet && <div>New high score!</div>}
          <RestartButton onClick={restart}>Restart</RestartButton>
        </>
      )}
    </>
  );
}

const RestartButton = styled.button`
  width: 5em;
  height: 2em;
  margin-bottom: 10px;
`

export default EndGameDisplay;