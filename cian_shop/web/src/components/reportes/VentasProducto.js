import React, { Component, Fragment } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { connect } from "react-redux";
import { getVentasProductos } from "../../actions/reportes";
import PropTypes from "prop-types";
import { PDFViewer } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  }
});

export class VentasProducto extends Component {
  static propTypes = {
    ventas_productos: PropTypes.array.isRequired,
    getVentasProductos: PropTypes.func.isRequired,
  };

  state = { total: 0 };
  constructor(props){
    super(props)
  }
  componentDidMount() {
    this.props.getVentasProductos();
   
   
  }
  render() {
    return (
      <Fragment>
        <PDFViewer width="100%" height="600px">
          <Document>
            <Page size="A4">
              <View style={styles.row}>
                <View style={styles.section}>
                  <Text>Producto</Text>
                </View>
                <View style={styles.section}>
                  <Text>Precio</Text>
                </View>
                <View style={styles.section}>
                  <Text>Cantidad</Text>
                </View>
                <View style={styles.section}>
                  <Text>SubTotal</Text>
                </View>
              </View>
              {this.props.ventas_productos.map((venta) =>
                venta.detalles.map((detalle) => (
                  <View style={styles.row}>
                    <View style={styles.section}>
                      <Text>{detalle.cian_producto.descripcion}</Text>
                    </View>
                    <View style={styles.section}>
                      <Text>{detalle.cian_producto.precio}</Text>
                    </View>
                    <View style={styles.section}>
                      <Text>{detalle.cantidad}</Text>
                    </View>
                    <View style={styles.section}>
                      <Text>{detalle.cantidad*detalle.cian_producto.precio}</Text>
                    </View>
                  </View>
                ))
              )}
               <View style={styles.row}>
                <View style={styles.section}>
                  <Text></Text>
                </View>
                <View style={styles.section}>
                  <Text></Text>
                </View>
                <View style={styles.section}>
                  <Text></Text>
                </View>
                <View style={styles.section}>
                  <Text>Total: {this.state.total}</Text>
                </View>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  ventas_productos: state.reportes.ventas_productos,
});

export default connect(mapStateToProps, { getVentasProductos })(VentasProducto);
