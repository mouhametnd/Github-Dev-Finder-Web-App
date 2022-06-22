import React from 'react';
import styled from 'styled-components';

const Wrapper = ({ children }) => <Container>{children}</Container>;

const Container = styled.section`
  margin: auto;
  padding: 25px;
  max-width: 650px;
  display: flex;
  flex-flow: column wrap;
  gap: 20px;
`;

export default Wrapper;
