import axios from 'axios';
import { useDispatch } from 'react-redux';

export const fetchPizzas = () => {
  const dispatch = useDispatch();
  axios.get('http://localhost:3001/db.json').then(({ data }) => {
    dispatchsetPizzas(data.pizzas);
  });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});