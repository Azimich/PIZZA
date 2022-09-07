export const initialState = {
  items: [],
  isLoaded: false
};

export const pizzas = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_PIZZAS':
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
    case 'LOADED':
    return {
      ...state,
      isLoaded: action.payload,
    };

    default:
      re
  }



  // if (action.type === 'SET_PIZZAS') {
  //   return {
  //     ...state,
  //     items: action.payload,
  //     isLoaded: true,
  //   }
  // }
  // if (action.type === 'LOADED') {
  //   return {
  //     ...state,
  //     isLoaded: action.payload,
  //   }
  // }
  // return state;
}

export default pizzas;