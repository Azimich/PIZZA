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

  if(sortBy){
    re
  }

  axios
    .get(
      `http://localhost:3001/db.json?${
        category !== null ? `category=${category}` : ''
      }`${ sortBy ? &_sort=${sortBy}&_order=asc} : " "`,
    )
    .then(({ data }) => {
    dispatch(setPizzas(data.pizzas));
  });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});