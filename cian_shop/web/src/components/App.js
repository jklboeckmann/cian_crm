import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import ListaProductos from './compras/ListaProductos';
import Carrito from './compras/Carrito';
import Dashboard from './productos/Dashboard';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';
import VentasProducto from './reportes/VentasProducto';
import VentasGlobales from './reportes/ventasGlobales';


import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  <PrivateRoute exact path="/" component={ListaProductos} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/productos" component={Dashboard} />
                  <Route exact path="/carrito" component={Carrito} />
                  <Route exact path="/reportes/ventasproducto" component={VentasProducto} />
                  <Route exact path="/reportes/ventas" component={VentasGlobales} />
                  
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
