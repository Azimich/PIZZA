import axios from 'axios';
// import { useDispatch } from 'react-redux';


export const fetchPizzas = (dispatch) => {
  axios.get('http://localhost:3001/db.json').then(({ data }) => {
    dispatch(setPizzas(data.pizzas));
  });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});