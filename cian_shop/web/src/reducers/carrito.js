import { GET_CARRITO, ADD_CARRITO, ADD_CARRITO_DET, GET_CARRITO_DET, UPDATE_CARRITO } from '../actions/types.js';

const initialState = {
    order: [],
    orderDet: [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CARRITO:
          return {
            ...state,
            order: action.payload,
          };
        case ADD_CARRITO:
            return {
              ...state,
              order: [...state.order, action.payload],
            };
        case ADD_CARRITO_DET:
            return {
                ...state,
                orderDet: [...state.orderDet, action.payload],
            };
        case GET_CARRITO_DET:
            return {
              ...state,
              orderDet: action.payload,
        };
        case UPDATE_CARRITO:
            return {
              ...state,
              orderDet: action.payload,
        };
        default:
            return state;
    }
}