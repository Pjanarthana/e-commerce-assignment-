import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../redux/actions/authActions';

function Navigation() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const cartItemCount = useSelector(state => state.cart.items.length);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <nav className="navigation">
      <Link to="/">Home</Link>
      {isAuthenticated ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
      <Link to="/cart">Cart ({cartItemCount})</Link>
    </nav>
  );
}

export default Navigation;