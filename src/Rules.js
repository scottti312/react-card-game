import React from 'react';

const Rules = ({ hard }) => {

  return (
    <>
      {!hard && (
        <div>
          Try to click on each number only once.
          Get all 12 to win!
        </div>
      )}
      {hard && (
        <div>
          Now it gets a bit harder. Click on each emoji only once. Try counting now!
        </div>
      )}
    </>
  );
}

export default Rules;