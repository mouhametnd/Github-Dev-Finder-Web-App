import React, { useContext } from 'react';
import styled from 'styled-components';
import { context } from '../../context/context';

// bar info container

const BarInfo = () => {
  const { userSelected } = useContext(context)[0];
  const { followers, following, public_repos } = userSelected;
  
  return (
    <Container>
      <Stat>
        <StatTitle>Followers</StatTitle>
        <StatValue>{followers}</StatValue>
      </Stat>

      <Stat>
        <StatTitle>Repos</StatTitle>
        <StatValue>{public_repos}</StatValue>
      </Stat>

      <Stat>
        <StatTitle>Following</StatTitle>
        <StatValue>{following}</StatValue>
      </Stat>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--bg);
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding: 15px;
  border-radius: 10px;
`;

const Stat = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

const StatTitle = styled.h4`
  margin: 0px;
  padding: 0px;
  font-size: 0.9rem;
  color: var(--txt-mid-contrast);
  text-align: center;
  font-weight: 300;
`;

const StatValue = styled.h4`
  margin: 0px;
  padding: 0px;
  font-size: 0.9rem;
  color: var(--txt-mid-contrast);
  text-align: center;
`;

export default BarInfo;
