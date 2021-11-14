import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screeens/HomeScreen";
import ProductScreen from "./screeens/ProductScreen";
import CartScreen from "./screeens/CartScreen";
import LoginScreen from "./screeens/LoginScreen";
import RegisterScreen from "./screeens/RegisterScreen";
import ProfileScreen from "./screeens/ProfileScreen";
import ShippingScreen from "./screeens/ShippingScreen";
import PaymentScreen from "./screeens/PaymentScreen";
import PlaceOrderScreen from "./screeens/PlaceOrderScreen";
import OrderScreen from "./screeens/OrderScreen";
import UserListScreen from "./screeens/UserListScreen";
import UserEditScreen from "./screeens/UserEditScreen";
import ProductListScreen from "./screeens/ProductListScreen";
import ProductEditScreen from "./screeens/ProductEditScreen";
import OrderListScreen from "./screeens/OrderScreenList";

const App = () => {
  return (
    <Router>
      <Header></Header>
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/Cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/productlist' component={ProductListScreen} exact/>
          <Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact/>
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact/>
          <Route path='/page/:pageNumber' component={HomeScreen} />
          <Route path='/search/:keyword/page/:pageNumber' component={HomeScreen} />
          <Route path='/' component={HomeScreen} exact/>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
};

export default App;
