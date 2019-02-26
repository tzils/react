import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';
import About from './Components/About';
import SectionTitle from './Components/SectionTitle';
import Sidebar from './Components/Sidebar';
import Catalogue from './Components/Catalogue';
import Default from './Components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Switch>
          <Route exact path="/" component={ProductList} /> 
          <Route path="/catalogue" component={Catalogue} />
          <Route path="/about" component={About} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
