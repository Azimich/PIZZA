
export const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const arr

const cart = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_PIZZA_CART': {
      const currentPizzaItems = !state.items[action.payload.id]
      ? [action.payload]
      : [...state.items[action.payload.id], action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: currentPizzaItems.reduce((sum, obj) => obj.price + sum, 0),
        },
      }

      const allPizzas =  [].concat.apply([], Object.values(newItems));
      const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum,0)

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      };
    }

    default:
      return state;
  }
}  

export default cart;