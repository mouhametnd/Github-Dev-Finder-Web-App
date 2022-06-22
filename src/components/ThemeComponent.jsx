import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import MoonSvg from '../assets/svg/MoonSvg';
import SunSvg from '../assets/svg/SunSvg';
import actions from '../context/actions';
import { context } from '../context/context';

const theme = new Map();
theme.set(true, {
  text: 'Sun',
  icon: SunSvg,
});
theme.set(false, {
  text: 'Moon',
  icon: MoonSvg,
});

const ThemeComponent = () => {
  const [state, dispatch] = useContext(context);
  const { isDarkMode } = state;
  const text = theme.get(isDarkMode).text;
  const Icon = theme.get(isDarkMode).icon;

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkMode);
  }, [isDarkMode]);

  const clickHandle = () => {
    localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
    dispatch({ type: actions.SET_DARK_MODE, payload: !isDarkMode });
  };

  return (
    <>
      <Container onClick={clickHandle}>
        <TextSwitch>{text}</TextSwitch>
        <Icon />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
  width: max-content;
  height: max-content;

  & * {
    cursor: pointer;
    transition: 0.1s linear;
  }

  & svg * {
    transition-property: fill;
  }
  & span {
    transition-property: color;
  }

  @media screen and (hover: hover) {
    &:hover {
      & span {
        color: var(--theme-switch-btn-hover);
      }

      & svg * {
        fill: var(--theme-switch-btn-hover);
      }
    }
  }
`;

const TextSwitch = styled.span`
  text-transform: uppercase;
  color: var(--txt-low-contrast);
  font-size: 0.9rem;
  padding-top: 4px;
  letter-spacing: 2.5px;
  font-weight: 700;
`;

export default ThemeComponent;
