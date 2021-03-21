import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProductos, deleteProducto } from '../../actions/productos';

export class Productos extends Component {
  static propTypes = {
    productos: PropTypes.array.isRequired,
    getProductos: PropTypes.func.isRequired,
    deleteProducto: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getProductos();
  }

  render() {
    return (
      <Fragment>
        <h2>Productos</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>DESCRIPCION</th>
              <th>PRECIO</th>
              <th>STOCK</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.productos.map((producto) => (
              <tr key={producto.cian_producto}>
                <td>{producto.cian_producto}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.precio}</td>
                <td>{producto.stock}</td>
                <td>
                  <button
                    onClick={this.props.deleteProducto.bind(this, producto.cian_producto)}
                    className="btn btn-danger btn-sm"
                  >
                    {' '}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  productos: state.productos.productos,
});

export default connect(mapStateToProps, { getProductos, deleteProducto })(Productos);
