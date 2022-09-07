export const initialState = {
  items: [],
  isLoaded: false
};

export const pizzas = (state = initialState, action) => {
  switch(action.type) {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
  }



  if (action.type === 'SET_PIZZAS') {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    }
  }
  if (action.type === 'LOADED') {
    return {
      ...state,
      isLoaded: action.payload,
    }
  }
  return state;
}

export default pizzas;