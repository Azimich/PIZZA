const initialState = {
  items: []
};

const pizzas = (state = initialState, action) => {
  if (action.type === 'SET_SORT_BY') {
    return {
      ...state,
      sortBy: action.payload,
    }
  }
  return state;
}

export default pizzas;