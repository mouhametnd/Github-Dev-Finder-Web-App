import React from 'react';
import styled from 'styled-components';
import ThemeComponent from '../ThemeComponent';

const ContainerTop = () => {
  return (
    <Container>
      <H1>devfinder</H1>
      <ThemeComponent />
    </Container>
  );
};

const H1 = styled.h1`
  letter-spacing: 1px;
  width: max-content;
  height: max-content;
  font-size: clamp(1.3rem, 2.5vw, 1.5rem);
  color: var(--txt-high-contrast);
`;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export default ContainerTop;
