
export const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_PIZZA_CART': {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id], action.payload],
      }

      const AllPizzas =  [].concat.apply([], Object.values(newItems));
      const totalPrice = 

      return {
        ...state,
        items: newItems,
        totalCount: AllPizzas.length,
      };
    }

    default:
      return state;
  }
}  

export default cart;