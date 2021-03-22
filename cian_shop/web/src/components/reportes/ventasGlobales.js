import React, { Component, Fragment } from 'react'
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { getVentasProductos } from "../../actions/reportes";
import PropTypes from "prop-types";
import { PDFViewer } from "@react-pdf/renderer";
import { connect } from "react-redux";

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

  
export  class ventasGlobales extends Component {

    static propTypes = {
        ventas_productos: PropTypes.array.isRequired,// tipo de propiedades
        getVentasProductos: PropTypes.func.isRequired,
      };

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
                  <Text>FECHA</Text>
                </View>
                <View style={styles.section}>
                  <Text>PEDIDO</Text>
                </View>
                <View style={styles.section}>
                  <Text>TOTAL</Text>
                </View>
           
              </View>
              {this.props.ventas_productos.map((venta) => (
             
                  <View style={styles.row}>
                    <View style={styles.section}>
                      <Text>{venta.fecha}</Text>
                    </View>
                    <View style={styles.section}>
                      <Text>{venta.cian_pedido}</Text>
                    </View>
                    <View style={styles.section}>
                      <Text>{venta.total}</Text>
                    </View>
                  </View>
                )
              )}
 
            </Page>
          </Document>
        </PDFViewer>
      </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({//agregar esttado
    ventas_productos: state.reportes.ventas_productos,
  });

  export default connect(mapStateToProps, { getVentasProductos })(ventasGlobales);
  
