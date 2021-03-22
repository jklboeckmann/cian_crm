import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getCarrito, deleteCarrito, updateCarrito } from "../../actions/carrito";
import PropTypes from "prop-types";

export class Carrito extends Component {
  static propTypes = {
    productos: PropTypes.array.isRequired,
    order: PropTypes.array.isRequired,
    getCarrito: PropTypes.func.isRequired,
    deleteCarrito: PropTypes.func.isRequired,
    updateCarrito: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCarrito();
  }


  render() {
    return (
      <Fragment>
        <h1>Detalle Pedido</h1>
        <div>
            {this.props.order.map((order_item) => (
              <div className="card" key={order_item.cian_pedido}>
                <b>Fecha:</b> {order_item.fecha}
                <b>Total:</b> {order_item.total}
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>ID DETALLE</th>
                    <th>IMAGEN</th>
                    <th>DESCRIPCION</th>
                    <th>PRECIO</th>
                    <th>CANTIDAD</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                {order_item.detalles.map((order_item_det) => (
                   <tr key={order_item_det.cian_detpedido}>
                      <td>{order_item_det.cian_producto.cian_producto}</td>
                      <td><img src={order_item_det.cian_producto.imagen} 
                      alt={order_item_det.cian_producto.descripcion}/></td>
                      <td>{order_item_det.cian_producto.descripcion}</td>
                      <td>{order_item_det.cian_producto.precio}</td>
                      <td>{order_item_det.cantidad}</td>
                      <td>
                  <button
                    onClick={(e)=>{
                      e.preventDefault()
                      this.props.deleteCarrito.bind(this, order_item.cian_detpedidodo)
                      this.props.getCarrito();
                    }}
                  >
                    Delete
                  </button>
                </td>
                   </tr>
                ))}
                </tbody>
                </table>
              </div>
            ))}

            <button className="card-btn"
            onClick={(e) => {
              e.preventDefault()
              this.props.updateCarrito(this.props.order[0].cian_pedido, {'pagado':true})
              this.props.getCarrito();
            }}
            >Comprar</button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  productos: state.compras.productos,
  order: state.carrito.order,
});

export default connect(mapStateToProps, { getCarrito, deleteCarrito, updateCarrito })(Carrito);
