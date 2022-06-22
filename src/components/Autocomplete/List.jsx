import React, { useContext } from 'react';
import styled from 'styled-components';
import actions from '../../context/actions';
import { context } from '../../context/context';
import ImgComponent from '../Img';

const ListOfSuggestions = ({ suggestions }) => {
  const dispatch = useContext(context)[1];

  const renderSuggestions = suggestions => {
    if (!suggestions.length) return <NoSuggestionFound>No suggestion found </NoSuggestionFound>;

    return suggestions.map(suggestion => {
      const { login, avatar_url, type } = suggestion;
      return (
        <Li key={login} data-id={login}>
          <ImgComponent src={avatar_url} alt="User Profile image" size="small" />

          <ContainerInfo>
            <UserName>{type}</UserName>
            <UserId>@{login}</UserId>
          </ContainerInfo>
        </Li>
      );
    });
  };

  const handleClick = e => {
    const payload = e.target.getAttribute('data-id');
    if (!payload) return;

    dispatch({ type: actions.SET_IS_SEARCHING, payload: false });
    dispatch({
      type: actions.SET_QUERY_SELECTED,
      payload,
    });
  };

  return <Ul onClick={handleClick}>{renderSuggestions(suggestions)}</Ul>;
};

const Li = styled.li`
  display: flex;
  flex-flow: row nowrap;
  gap: 15px;
  margin: 0px;
  padding: 0px;
  padding: 5px 10px;
  border-radius: 10px;
  transition: 0.2s linear background-color;
  box-shadow: 0 10px 10px -10px rgb(70 96 187 / 20%);
  cursor: pointer;

  & * {
    pointer-events: none;
  }

  @media screen and (hover: hover) {
    background-color: var(--bg-secondary);
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-flow: column wrap;
  gap: 20px;
  padding: 20px;
  margin: 0px;
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 4px;

  @media screen and (min-width: 768px) {
    padding-top: 10px;
  }
`;

const UserName = styled.span`
  font-size: 1rem;
  color: var(--txt-high-contrast);
`;

const UserId = styled.span`
  font-size: 0.9rem;
  color: var(--txt-autocomplete);
`;

const NoSuggestionFound = styled.span`
  font-size: 1rem;
  color: var(--txt-high-contrast);
`;

export default ListOfSuggestions;
