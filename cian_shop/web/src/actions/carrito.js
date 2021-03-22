import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_CARRITO, ADD_CARRITO, DELETE_CARRITO, UPDATE_CARRITO } from './types';

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

  export const addCarrito = (producto) => (dispatch, getState) => {
    axios
      .post('/api/carrito/', producto, tokenConfig(getState))
      .then((res) => {
        dispatch(createMessage({ addCarrito: 'Se ha agregado al carrito' }));
        dispatch({
          type: ADD_CARRITO,
          payload: res.data,
        });
      })
      .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
  };
  


  export const deleteCarrito = (id) => (dispatch, getState) => {
    axios
      .delete(`/api/carrito/det/${id}/`, tokenConfig(getState))
      .then((res) => {
        dispatch(createMessage({ deleteCarrito: 'Se ha eliminado del carrito' }));
        dispatch({
          type: DELETE_CARRITO,
          payload: res.data,
        });
      })
      .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
  };
  

  export const updateCarrito = (id, data) => (dispatch, getState) => {
    console.log(id, data)
    axios
      .put(`/api/carrito/${id}/`, data, tokenConfig(getState))
      .then((res) => {
        dispatch(createMessage({ updateCarrito: 'Se ha realizado el pago del carrito' }));
        dispatch({
          type: UPDATE_CARRITO,
          payload: res.data,
        });
      })
      .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
  };
  