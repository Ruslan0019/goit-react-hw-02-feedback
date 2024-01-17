import styled from "styled-components";

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
const FeedbackOptionsList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 10px;
  padding: 0;
  justify-content: center;
`;

export {Button,FeedbackOptionsList}