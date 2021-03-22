import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_PRODUCTOS, DELETE_PRODUCTO, ADD_PRODUCTO } from './types';

export const getProductos = () => (dispatch, getState) => {
  axios
    .get('/api/productos/', tokenConfig(getState,'multipart/form-data'))
    .then((res) => {
      dispatch({
        type: GET_PRODUCTOS,  
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};


export const deleteProducto = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/productos/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteProducto: 'Producto Eliminado' }));
      dispatch({
        type: DELETE_PRODUCTO,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addProducto = (producto) => (dispatch, getState) => {
  axios
    .post('/api/productos/', producto, tokenConfig(getState,'multipart/form-data'))
    .then((res) => {
      dispatch(createMessage({ addProducto: 'Producto Agregado' }));
      dispatch({
        type: ADD_PRODUCTO,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
