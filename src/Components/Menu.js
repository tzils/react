//RCC tworzy nowy komponent

import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../Styles/Main.css';

export default class Menu extends Component {
  render() {
    return (
           <nav className="navbar">
           <div className="container">
            <ul className="nav">
            <Link to="/" className="menu-link">Main</Link>
            <Link to="/catalogue" className="menu-link">Catalogue</Link>
            <Link to="/about" className="menu-link">About</Link>
            </ul>
            </div>
           </nav>
    )
  }
}


// import React, {Component} from 'react';
// import './Menu.css'
// class Menu extends React.Component {
//     render() {
//       return (
//         <div className="App">
          // <nav className="navbar">
            
          //   <ul className="nav">
          //   <li><a href="index.html">Home</a></li>
          //   <li><a href="catalog.html">Catalog</a></li>
          //   <li><a href="about.html">About</a></li>
          //   </ul>
          
          //  </nav>
//         </div>
//       );
//     }
//   }

// export default Menu;