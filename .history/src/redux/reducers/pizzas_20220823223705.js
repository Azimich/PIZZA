const initialState = {
  items: []
};

const pizzas = (state = initialState, action) => {
  if (action.type === 'SET_PIZZAS') {
    return {
      ...state,
      ite: action.payload,
    }
  }
  return state;
}

export default pizzas;