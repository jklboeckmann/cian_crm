import axios from 'axios';
import { returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_ALL_PRODUCTOS  } from './types';


export const getAllProductos = () => (dispatch, getState) => {
    axios
      .get('/api/productos/', tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: GET_ALL_PRODUCTOS,
          payload: res.data,
        });
      })
      .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
  };

  