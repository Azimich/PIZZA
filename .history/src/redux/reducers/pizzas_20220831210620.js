export const initialState = {
  items: [],
  isLoaded: 'false',
};

export const pizzas = (state = initialState, action) => {
  if (action.type === 'SET_PIZZAS') {
    return {
      ...state,
      items: action.payload,
      isL
    }
  }
  return state;
}

export default pizzas;