import { GET_VENTAS_PRODUCTO } from '../actions/types.js';

const initialState = {
    ventas_productos: [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
        case GET_VENTAS_PRODUCTO:// si Type
          return {
            ...state,
            ventas_productos: action.payload,//Guarda respose data en el estado ventas productos
          };
        default:
            return state;
    }
}