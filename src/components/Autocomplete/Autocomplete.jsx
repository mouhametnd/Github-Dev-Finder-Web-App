import React, { useContext, useDeferredValue, useEffect, useState } from 'react';
import styled from 'styled-components';
import { context } from '../../context/context';
import fetchSuggestions from '../../helpers/fetchSuggestions';
import ListOfSuggestions from './List';

const initialState = {
  isLoading: false,
  suggestions: [],
  error: null,
};

const displayAutocomplete = ({ isSearching }) => (isSearching ? 'block' : 'none');

const Autocomplete = ({ searchValue }) => {
  const { isSearching } = useContext(context)[0];
  const [state, setState] = useState(initialState);
  const searchValueDeferred = useDeferredValue(searchValue, 1000);
  const { error, isLoading, suggestions } = state;

  useEffect(() => {
    if (isSearching) fetchSuggestions({ query: searchValueDeferred, setState });
  }, [searchValueDeferred]);

  const handleError = error => {
    if (!error) return false;

    return error.status === 403 ? (
      <ForbiddenError>We have reached our API rate limit. Please try again after 10s</ForbiddenError>
    ) : (
      <Error>Something went wrong. Please try again later.</Error>
    );
  };

  return (
    <Container id="autocomplete" isSearching={isSearching}>
      {isLoading ? (
        <LoadingSpan>Loading...</LoadingSpan>
      ) : (
        handleError(error) || <ListOfSuggestions suggestions={suggestions} />
      )}
    </Container>
  );
};

const Container = styled.section`
  position: absolute;
  z-index: 999;
  top: 70px;
  left: -1px;
  background-color: var(--bg);
  width: 100%;
  max-width: 350px;
  max-height: 500px;
  overflow: scroll;
  border-radius: 10px;
  box-shadow: 0 10px 100px -10px rgb(70 96 187 / 20%);

  display: ${displayAutocomplete};

  &::-webkit-scrollbar {
    display: none;
  }
`;

const LoadingSpan = styled.span`
  display: inline-block;
  padding: 10px 20px;
`;

const ForbiddenError = styled.span`
  display: inline-block;
  padding: 20px 20px;
  color: var(--forbidden-error-clr);
  font-size: 0.9rem;
  line-height: 22px;
`;

const Error = styled.span`
  padding: 10px 20px;
  color: var(--error-clr);
`;

export default Autocomplete;
