import { GET_CARRITO, ADD_CARRITO, DELETE_CARRITO, UPDATE_CARRITO} from '../actions/types.js';

const initialState = {
    order: []
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
        case DELETE_CARRITO:
              return {
                ...state,
                order: [...state.order, action.payload],
              };
        case UPDATE_CARRITO:
                return {
                  ...state,
                  order: [...state.order, action.payload],
        };
        default:
            return state;
    }
}