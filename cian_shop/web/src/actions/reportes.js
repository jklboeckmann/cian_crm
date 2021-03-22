import axios from 'axios';
import { returnErrors } from './messages';
import { tokenConfig } from './auth';
import { GET_VENTAS_PRODUCTO  } from './types';

export const getVentasProductos = () => (dispatch, getState) => {
    axios
      .get('/api/ventas/', tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: GET_VENTAS_PRODUCTO,//envia a reducer
          payload: res.data,
        });
      })
      .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
  };