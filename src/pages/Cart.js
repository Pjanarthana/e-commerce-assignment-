import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, updateQuantity, clearCart } from '../redux/actions/cartActions';
import styles from '../styles/Cart.module.css';

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
    showPopup('Item removed from cart');
  };

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateQuantity(productId, quantity));
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/signin');
    } else {
      showPopup('Your order is on the way!');
      setTimeout(() => {
        dispatch(clearCart());
        window.location.reload();
      }, 3000);
    }
  };

  const showPopup = (message) => {
    const popup = document.createElement('div');
    popup.className = styles.popup;
    popup.textContent = message;
    document.body.appendChild(popup);
    setTimeout(() => {
      popup.remove();
    }, 3000);
  };

  if (cartItems.length === 0) {
    return <div className={styles.emptyCart}>Your cart is empty</div>;
  }

  return (
    <div className={styles.cart}>
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className={styles.cartItem}>
          <img src={item.image} alt={item.title} />
          <div className={styles.itemDetails}>
            <h3>{item.title}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <div className={styles.quantityControl}>
              <button onClick={() => handleQuantityChange(item.id, Math.max(1, item.quantity - 1))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
            </div>
            <button className={styles.removeButton} onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className={styles.cartTotal}>
        Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
      </div>
      <button className={styles.checkoutButton} onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default Cart;