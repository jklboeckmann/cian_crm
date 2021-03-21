import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getCarrito, getCarritoDet, updateCarrito } from '../../actions/carrito';
import { getAllProductos } from '../../actions/compras';
import PropTypes from 'prop-types';

export class Carrito extends Component {
  static propTypes = {
      productos: PropTypes.array.isRequired,
      order: PropTypes.array.isRequired,
      orderDet: PropTypes.array.isRequired,
      getCarrito: PropTypes.func.isRequired,
      getCarritoDet: PropTypes.func.isRequired,
      getAllProductos: PropTypes.func.isRequired,
      updateCarrito: PropTypes.func.isRequired,
    };
  
  componentDidMount() {
      this.props.getCarrito();
      this.props.getCarritoDet();
      this.props.getAllProductos();
  }


  render() {
      return (
          <Fragment>
             <h1>Detalle Pedido</h1>
             <div>
        {this.props.order.filter(order => order.pagado == 0).map((order_item) => (
           <div className="card">
             <b>Fecha:</b>   {order_item.fecha}  
             <ul>
             {this.props.orderDet.filter(orderDet => orderDet.cian_pedido == order_item.cian_pedido)
             .map((order_item_det) => ( 
              <li>
                {this.props.productos.filter(item => item.cian_producto == order_item_det.cian_producto)[0].descripcion}
                - Precio {this.props.productos.filter(item => item.cian_producto == order_item_det.cian_producto)[0].precio} 
              </li>
              
               ))}
              </ul> 
              <button className='card-btn'>
             Comprar
                      </button>
             </div>
        
        ))}
        
        </div>
          </Fragment>
      )
  }
}

const mapStateToProps = (state) => ({
    productos: state.compras.productos,
    order: state.carrito.order,
    orderDet: state.carrito.orderDet,
  });

export default connect(mapStateToProps, { getCarrito, getCarritoDet, getAllProductos, updateCarrito })(Carrito);