import styled from 'styled-components';
export const Section = ({ title, children }) => {
  return (
    <div>
      <H2>{title}</H2>
      {children}
    </div>
  );
};
const H2 = styled.h2`
  color: #686868;
  display: flex;
  justify-content: center;
`;
