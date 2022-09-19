
export const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_PIZZA_CART':
      return {
        ...state,
        items: {
          ...state.
          [action.payload.id]: [...state.items[
            action.payload.payload.id], action.payload]
        },
      };

    default:
      return state;
  }
}  

export default cart;