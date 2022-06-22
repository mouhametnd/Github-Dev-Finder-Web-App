import actions from '../context/actions';
const { SET_LOADING, SET_ERROR, SET_USER } = actions;

const getUser = async ({ query, dispatch }) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    
    const request = await fetch(`https://api.github.com/users/${query}`);
    if (!request.ok) throw request;
    const response = await request.json();

    dispatch({ type: SET_LOADING, payload: false });
    dispatch({ type: SET_USER, payload: response });
    dispatch({ type: SET_ERROR, payload: false });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: true });
    dispatch({ type: SET_LOADING, payload: false });
    dispatch({ type: SET_USER, payload: {} });
  }
};

export default getUser;