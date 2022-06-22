import { useReducer, createContext, useEffect } from 'react';
import getThemeFromLocalStorage from '../helpers/getTheme';
import getUser from '../helpers/getUser';
import actions from './actions';
import reducer from './reducer';

const context = createContext();
const initialState = {
  userSelected: {},
  searchValue: '',
  querySelected: '',
  isDarkMode: false,
  isLoading: false,
  isSearching: false,
  error: null,
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { querySelected } = state;
  const { SET_DARK_MODE, SET_QUERY_SELECTED } = actions;

  useEffect(() => {
    dispatch({ type: SET_DARK_MODE, payload: getThemeFromLocalStorage() });
    dispatch({ type: SET_QUERY_SELECTED, payload: 'mouhametnd' });
  }, []);

  useEffect(() => {
    if (querySelected) getUser({ query: querySelected, dispatch });
  }, [querySelected]);

  return <context.Provider value={[state, dispatch]}>{children}</context.Provider>;
};

export default ContextProvider;
export { context, initialState };
