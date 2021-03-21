import { GET_ALL_PRODUCTOS } from '../actions/types.js';

const initialState = {
    productos: [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCTOS:
          return {
            ...state,
            productos: action.payload,
          };
        default:
            return state;
    }
}