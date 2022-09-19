import React from 'react';
import { CartItem } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/actions/cart';

function Cart() {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({cart}) => cart);

  const addedPizzas = Object.keys(items).map(key => {
    return items[key].items[0];
  });

  const onClearCart = () => {
    if (window.confirm('Очистить карзину?')) {
      dispatch(clearCart());
    }
  }

  return (
    <div className="content">
      <div className="container container--cart">
        {
          totalCount ?
          
        }
        
      </div>
    </div>
  )
}

export default Cart


<div class="cart cart--empty">
<h2>Корзина пустая <icon>😕</icon></h2>
<p>
  Вероятней всего, вы не заказывали ещё пиццу.<br />
  Для того, чтобы заказать пиццу, перейди на главную страницу.
</p>
<img src="/img/empty-cart.png" alt="Empty cart" />
<a href="/" class="button button--black">
  <span>Вернуться назад</span>
</a>
</div>