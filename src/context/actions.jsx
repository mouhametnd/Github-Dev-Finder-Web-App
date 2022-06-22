const actions = {
  SET_USER: 'SET_USER',
  SET_ERROR: 'SET_ERROR',
  SET_LOADING: 'SET_LOADING',
  SET_DARK_MODE: 'SET_DARK_MODE',
  SET_INPUT_VALUE: 'SET_INPUT_VALUE',
  SET_IS_SEARCHING: 'SET_IS_SEARCHING',
  SET_QUERY_SELECTED: 'SET_QUERY_SELECTED',
};

// This object is used to create dynamic proprties for the context.
const props = {
  SET_USER: 'userSelected',
  SET_INPUT_VALUE: 'searchValue',
  SET_QUERY_SELECTED: 'querySelected',
  SET_DARK_MODE: 'isDarkMode',
  SET_LOADING: 'isLoading',
  SET_IS_SEARCHING: 'isSearching',
  SET_ERROR: 'error',
};
export default actions;
export { props };
