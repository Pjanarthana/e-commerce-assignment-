import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import styles from '../styles/Product.module.css';

function Product({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    showPopup('Item added to cart');
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

  return (
    <div className={styles.product}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
      <button className={styles.addToCartButton} onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;