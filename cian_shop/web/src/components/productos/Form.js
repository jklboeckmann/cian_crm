import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addProducto } from "../../actions/productos";

export class Form extends Component {
  state = {
    descripcion: "",
    precio: "",
    stock: "",
    image: null,
  };

  static propTypes = {
    addProducto: PropTypes.func.isRequired,
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0],
    });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    let producto = new FormData();
    producto.append("imagen", this.state.image, this.state.image.name);
    producto.append("descripcion", this.state.descripcion);
    producto.append("precio", this.state.precio);
    producto.append("stock", this.state.stock);
    this.props.addProducto(producto);
    this.setState({
      descripcion: "",
      precio: "",
      stock: "",
      image: null,
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
              type="trext"
              name="stock"
              onChange={this.onChange}
              value={stock}
            />
          </div>
          <div className="form-group">
            <label>Imagen</label>
            <input
              type="file"
              id="image"
              accept="image/png, image/jpeg"
              onChange={this.handleImageChange}
              required
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
