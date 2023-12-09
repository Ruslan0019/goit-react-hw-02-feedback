import styled from 'styled-components';
export const Statistics = ({ good, neutral, bad, total, feedback }) => {
  return (
    <Div1>
      <Div2>
        Good <span>{good}</span>
      </Div2>
      <Div2>
        Neutral <span>{neutral}</span>
      </Div2>
      <Div2>
        Bad <span>{bad}</span>
      </Div2>
      <Div2>
        Total <span>{total}</span>
      </Div2>
      <Div2>
        Positive feedback <span>{feedback}%</span>
      </Div2>
    </Div1>
  );
};

const Div1 = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 10px;
  padding: 0;
  flex-direction: column;
  width: 200px;
  margin: 0 auto;
  justify-content: center;
`;
const Div2 = styled.li`
  display: flex;
  justify-content: space-between;
`;
