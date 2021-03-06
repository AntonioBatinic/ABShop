import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Default from './components/Default';
import Model from './components/Model';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  render () {
    return (
     <React.Fragment>
       <Navbar> </Navbar>
       <Switch>
         <Route exact path="/" component={ProductList}/>
         <Route path="/details" component={Details}/>
         <Route path="/cart" component={Cart}/>
         <Route path="/login" component={Login}/>
         <Route path="/register" component={Register}/>
         <Route component={Default}/>
       </Switch>
       <Model></Model>
     </React.Fragment>
      );
  }
}

export default App;
