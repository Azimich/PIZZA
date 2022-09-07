
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
          ...state.items[action.pay]
        }
      };

    default:
      return state;
  }
}  

export default cart;