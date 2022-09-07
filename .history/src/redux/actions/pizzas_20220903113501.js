import axios from 'axios';
import pizzas from '../reducers/pizzas';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  axios
    .get(
      `http://localhost:3001/pizzas?category=2`,
    )
    .then(({ data }) => {
    dispatch(pizzas(data.pizzas, ));
  });
};