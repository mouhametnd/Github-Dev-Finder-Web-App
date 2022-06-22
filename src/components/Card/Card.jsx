import React, { useContext } from 'react';
import styled from 'styled-components';
import { context } from '../../context/context';
import BarInfo from './BarInfo';
import Links from './Links';
import PersonalInfo from './PersonalInfo';
import LoadingSvg from '../../assets/svg/LoadingSvg';


const shouldRenderLoader = isLoading => (isLoading ? <LoadingSvg /> : false);

const Card = () => {
  const { userSelected, isLoading } = useContext(context)[0];


  return (
    <Container>
      {shouldRenderLoader(isLoading) || userSelected.bio ? (
        <>
          <PersonalInfo />
          <BarInfo />
          <Links />
        </>
      ) : (
        <UserNoFounded>User no founded</UserNoFounded>
      )}
    </Container>
  );
};

const Container = styled.section`
  padding: 35px 20px;
  background-color: var(--bg-secondary);
  box-shadow: 0 16px 40px -10px rgb(70 96 187 / 20%);
  border-radius: 10px;
  display: flex;
  flex-flow: column wrap;
  gap: 30px;
`;

const UserNoFounded = styled.h3`
  margin: 0px;
  padding: 0px;
  font-size: 1.2rem;
  color: var(--error-clr);
  text-align: center;
`;

export default Card;
