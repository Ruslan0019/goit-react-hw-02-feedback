// import { Component } from 'react';
import styled from 'styled-components';

const Feedback = () => {
  return (
    <>
      <Div>
        <h1>Please leave feedback</h1>
      </Div>
      <Div>
        <h1>Statistics</h1>
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;

export default Feedback;
