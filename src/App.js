import React from "react";
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from "./containers/Header";
import ProductListing from './containers/ProductListing';
import "./App.css";
import ProductDetails from "./containers/ProductDetail";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/products/:productId" exact component={ProductDetails} />
          <Route><h1>Error 404 Page Not Found</h1></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
