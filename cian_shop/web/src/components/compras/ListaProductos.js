import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getAllProductos } from "../../actions/compras";
import { addCarrito } from "../../actions/carrito";
import PropTypes from "prop-types";

export class ListaProductos extends Component {
  static propTypes = {
    productos: PropTypes.array.isRequired,
    getAllProductos: PropTypes.func.isRequired,
    addCarrito: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getAllProductos();
  }

  render() {
    return (
      <Fragment>
        <div className="container">
        <h1>Lista de Productos</h1>
         <div className="row" >
        {this.props.productos.map((producto) => (
          <ProductoWrapper className="col-4" key={producto.cian_producto}>
            <div className="card" >
              <div className="img-container p-5">
                <img src={producto.imagen} alt={producto.descripcion}  className="card-img-top w-100"/>
                <button className="card-btn" onClick={this.props.addCarrito.bind(this, producto)}>
                  <i className="fas fa-cart-plus" />
                </button>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <p className="aling-self-center mb-0">{producto.descripcion}</p>
                <h5 className="text-b font-italic mb-0">
                  <span className="ml-1">$</span>
                  {producto.precio}
                </h5>
              </div>
            </div>
          </ProductoWrapper>
        ))}
         </div>
         </div>
      </Fragment>
    );
  }
}

const ProductoWrapper = styled.div`
.card{
    boreder-color:transparent;
    transition: all 0.3s linear;
    margin-top:20px
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition all 0.3s linear;
}
&:hover{
    .card{
        border:0.4rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247,247,247);
    }
}
.img-container{
    position:relative;
    overflow:hidden;
}

.car-img-top{
    transition: all 0.5s linear;
    width: 100px;
}


.img-container:hover .card-img-top{
    transform: scale(1.2);

}
.card-btn{
    position: relative;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--celeste);
    border: none;
    color: var(--blanco);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform: translate(100%,100%);
    transition: all 0.5s linear;
}
.img-container:hover  .card-btn{
    transform: translate(0,0);
}
`;

const mapStateToProps = (state) => ({
  productos: state.compras.productos
});

export default connect(mapStateToProps, {
  getAllProductos,
  addCarrito,
})(ListaProductos);
