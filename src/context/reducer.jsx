import { props } from './actions';

const reducer = (state, action) => {
  const prop = props[action.type];
  return prop ? { ...state, [prop]: action.payload } : state;
};

export default reducer;
