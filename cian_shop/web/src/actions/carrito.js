import axios from 'axios';
import { returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_CARRITO, ADD_CARRITO, ADD_CARRITO_DET, GET_CARRITO_DET } from './types';

export const getCarrito = () => (dispatch, getState) => {
    axios
      .get('/api/carrito/', tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: GET_CARRITO,
          payload: res.data,
        });
      })
      .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
  };

  export const addCarrito = (order) => (dispatch, getState) => {
    axios
      .post('/api/carrito/', order, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: ADD_CARRITO,
          payload: res.data,
        });
      })
      .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
  };
  
  export const addCarritoDetalle = (orderDet) => (dispatch, getState) => {
    
    axios
      .post(`/api/detallecarrito/`, orderDet, tokenConfig(getState))
      .then((res) => {
        dispatch(createMessage({ addOrderDet: 'Producto Agregado al Carrito' }));
        dispatch({
          type: ADD_CARRITO_DET,
          payload: res.data,
        });
      })
      .catch((err) => dispatch(
        returnErrors(err.response.data, err.response.status)
        
        ));
  };

  export const getCarritoDet = () => (dispatch, getState) => {
    axios
      .get(`/api/detallecarrito/`, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: GET_CARRITO_DET,
          payload: res.data,
        });
      })
      .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
  };
  