import React from 'react';

export const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

export const cart = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_TOTAL_PRICE':
      return {
        ...state,
        totalPrice: action.payload
      };
    case 'SET_TOTAL':
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
}  