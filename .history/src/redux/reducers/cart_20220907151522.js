
export const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_PIZZA_CART': {
      const newItems = {

      }
    }
      return {
        ...state,
        items: {
         
        },
      };

    default:
      return state;
  }
}  

export default cart;