import axios from 'axios';

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
    dispatch(setPizzas(data.pizzas));
  });
};

setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});