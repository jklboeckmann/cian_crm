import { combineReducers } from 'redux';
import productos from './productos';
import compras from './compras';
import carrito from './carrito';
import errors from './errors';
import messages from './messages';
import auth from './auth';
import reportes from './reportes';

export default combineReducers({
  productos,
  errors,
  messages,
  auth,
  compras,
  carrito,
  reportes,
});
