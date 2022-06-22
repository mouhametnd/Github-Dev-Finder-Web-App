import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchSvg from '../assets/svg/SearchSvg';
import actions from '../context/actions';
import { context } from '../context/context';
import Autocomplete from './Autocomplete/Autocomplete';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [hasQuery, setHasQuery] = useState(null);
  const dispatch = useContext(context)[1];
  const { SET_IS_SEARCHING, SET_QUERY_SELECTED } = actions;

  // This function is called to set the searchValue and dispatch some actions.
  const setStates = ({ searchValuePayload, isSearchingPayload, querySelectedPayload, hasQueryPayload }) => {
    if (typeof searchValuePayload !== 'undefined') setSearchValue(searchValuePayload);
    if (typeof isSearchingPayload !== 'undefined') dispatch({ type: SET_IS_SEARCHING, payload: isSearchingPayload });
    if (typeof hasQueryPayload !== 'undefined') {
      setHasQuery(hasQueryPayload);
      setTimeout(() => setHasQuery(null), 1000);
    }
    if (typeof querySelectedPayload !== 'undefined')
      dispatch({
        type: SET_QUERY_SELECTED,
        payload: querySelectedPayload,
      });
  };

  useEffect(() => {
    document.addEventListener('click', e => {
      const $element = e.target;
      if ($element.matches('#autocomplete, #autocomplete *, [type="search"], label')) return;

      setStates({ isSearchingPayload: false });
    });
  }, []);

  const handleFocus = () =>
    searchValue
      ? setStates({ searchValuePayload: searchValue, isSearchingPayload: true })
      : setStates({ isSearchingPayload: false });

  const handleChange = e => {
    const value = e.target.value.trim();
    value
      ? setStates({ searchValuePayload: value, isSearchingPayload: true })
      : setStates({ isSearchingPayload: false });
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchValue
      ? setStates({ isSearchingPayload: false, querySelectedPayload: searchValue })
      : setStates({ hasQueryPayload: false });
  };

  return (
    <>
      <Container>
        <Label htmlFor="search">
          <SearchSvg />
        </Label>

        <Form onSubmit={handleSubmit}>
          <Input
            type="search"
            id="search"
            name="search"
            placeholder="Search Github username..."
            autoComplete="off"
            onFocus={handleFocus}
            onChange={handleChange}
          />

          <Button>Search</Button>
        </Form>

        <Autocomplete searchValue={searchValue} />
      </Container>
      {hasQuery !== null && hasQuery === false ? <NoQueryTyped children="Field empty" /> : false}
    </>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  column-gap: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--bg-secondary);
  box-shadow: 0 10px 30px -10px rgb(70 96 187 / 20%);

  @media screen and (min-width: 768px) {
    padding: 10px 20px;
  }
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  gap: 10px;
  padding: 0px;
`;

const Label = styled.label`
  & * {
    cursor: pointer;
  }
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--txt-search);
  width: 100%;

  &::placeholder {
    font-size: clamp(0.8rem, 2.5vw, 0.9rem);
    color: var(--txt-search);
  }

  @media screen and (min-width: 768px) {
    max-width: none;
  }
`;

const Button = styled.button`
  color: #fff;
  background-color: var(--primary);
  font-size: 1rem;
  border-radius: 10px;
  padding: 10px 24px;
  font-weight: 700;
  border: none;
  outline: none;
  cursor: pointer;
  transition: color 0.1s linear;

  @media screen and (hover: hover) {
    &:hover {
      background-color: var(--primary-hover);
    }
  }

  @media screen and (min-width: 768px) {
    padding: 12px 26px;
  }
`;

const NoQueryTyped = styled.p`
  color: var(--error-clr);
  text-align: center;
`;

export default SearchBar;
