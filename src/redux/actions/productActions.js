import axios from 'axios';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
};

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  };
};