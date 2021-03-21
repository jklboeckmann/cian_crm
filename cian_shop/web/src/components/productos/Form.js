import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addProducto } from '../../actions/productos';

export class Form extends Component {
  state = {
    descripcion: '',
    precio: '',
    stock: '',
  };

  static propTypes = {
    addProducto: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { descripcion, precio, stock } = this.state;
    const producto = { descripcion, precio, stock };
    this.props.addProducto(producto);
    this.setState({
      descripcion: '',
      precio: '',
      stock: '',
    });
  };

  render() {
    const { descripcion, precio, stock } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Agregar Producto</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Descripcion</label>
            <input
              className="form-control"
              type="text"
              name="descripcion"
              onChange={this.onChange}
              value={descripcion}
            />
          </div>
          <div className="form-group">
            <label>Precio</label>
            <input
              className="form-control"
              type="text"
              name="precio"
              onChange={this.onChange}
              value={precio}
            />
          </div>
          <div className="form-group">
            <label>Stock</label>
            <input
              className="form-control"
              type="text"
              name="stock"
              onChange={this.onChange}
              value={stock}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addProducto })(Form);
