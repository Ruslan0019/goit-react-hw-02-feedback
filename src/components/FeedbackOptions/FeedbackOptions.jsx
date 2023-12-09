import styled from 'styled-components';
export const FeedbackOptions = ({
  handleClick,
  handleClick1,
  handleClick2,
}) => {
  return (
    <Ul>
      <Button name="good" onClick={handleClick}>
        Good
      </Button>
      <Button name="Neutral" onClick={handleClick1}>
        Neutral
      </Button>
      <Button name="Bad" onClick={handleClick2}>
        Bad
      </Button>
    </Ul>
  );
};
const Button = styled.button`
  background-color: #434343;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #ab02fa;
  }
`;
const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 10px;
  padding: 0;
  justify-content: center;
`;
