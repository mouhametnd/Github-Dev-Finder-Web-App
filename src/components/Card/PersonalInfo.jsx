import React, { useContext } from 'react';
import styled from 'styled-components';
import { context } from '../../context/context';
import ImgComponent from '../Img';
import timeFormater from '../../helpers/timeFormater'

const PersonalInfo = () => {
  const { userSelected } = useContext(context)[0];
  const { avatar_url, bio, login, created_at, name } = userSelected;
  const timed = timeFormater(created_at);

  return (
    <div>
      <Container>
        <ImgComponent size={'medium'} src={avatar_url} />

        <ContainerPersonalInfo>
          <H2>{name}</H2>

          <H3>
            <a href={`https://github.com/${login}`} target="_blank">
              @{login}
            </a>
          </H3>

          <Time dateTime={timed}>Joined {timed}</Time>
        </ContainerPersonalInfo>
      </Container>

      <P>{bio}</P>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-flow: row nowrap;
  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

const ContainerPersonalInfo = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
  @media screen and (min-width: 768px) {
    flex-flow: row wrap;
    column-gap: 25px;
    row-gap: 0px;
  }
`;

const H2 = styled.h2`
  margin: 0px;
  padding: 0px;
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: var(--txt-high-contrast);
`;

const H3 = styled.h3`
  margin: 0px;
  padding: 0px;
  font-size: 0.9rem;
  & * {
    color: var(--primary);
  }

  @media screen and (min-width: 768px) {
    order: 1;
  }
`;

const Time = styled.time`
  color: var(--txt-low-contrast);
  @media screen and (min-width: 768px) {
    padding-top: 3.8px;
  }
`;

const P = styled.p`
  color: var(--txt-low-contrast);
  text-align: center;
`;

export default PersonalInfo;
