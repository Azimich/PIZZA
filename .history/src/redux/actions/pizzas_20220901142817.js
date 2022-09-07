import axios from 'axios';

export const isLoaded = val => ({
  type: 'SET_LOADING',
  payload
})

export const fetchPizzas = () => (dispatch) => {
  axios.get('http://localhost:3001/db.json').then(({ data }) => {
    dispatch(setPizzas(data.pizzas));
  });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});