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
      `http://localhost:3001/db.json?${
        category !== null ? `category=${category}` : ''
      }`,
    )
    .then(({ data }) => {
    dispatch(setPizzas(data.pizzas));
  });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

// import axios from 'axios';
// import pizzas from '../reducers/pizzas';

// export const setLoaded = (payload) => ({
//   type: 'SET_LOADED',
//   payload,
// });

// export const fetchPizzas = (sortBy, category) => (dispatch) => {
//   dispatch({
//     type: 'SET_LOADED',
//     payload: false,
//   });

//   axios
//     .get(
//       `http://localhost:3001/pizzas?popular`,
//     )
//     .then(({ data }) => {
//       dispatch({
//         type: 'SET_LOADED',
//         payload: true,
//       });
//       dispatch({
//         type: 'SET_PIZZAS',
//         payload: data,
//       });
//   });
// };