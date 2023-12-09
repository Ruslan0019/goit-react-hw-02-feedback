import styled from 'styled-components';
export const Notification = ({ message }) => {
  return <P>{message}</P>;
};

const P = styled.p`
  display: flex;
  justify-content: center;
`;
