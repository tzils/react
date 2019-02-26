import React, { Component } from 'react'
import Product from './Product';
import SectionTitle from './SectionTitle';
import BigTitle from './BigTitle';
import Products from '../products.json'
import '../Styles/Main.css';

export default class ProductList extends Component {
  render() {
    return (
        <div className="container">
        <BigTitle name="Welcome to our store" />
        <SectionTitle name="Desktops" />
        <div className="products">
            {Products.map((item) => {
                if(item.category==="desktop" && item.featured === true){
                return <Product name={item.name} image={item.image} amount={item.amount} key={item.name} />
             }
            })}
        </div>
        <SectionTitle name="Tablets" />
        <div className="products">
            {Products.map((item) => {
                if(item.category==="tablet" && item.featured === true){
                return <Product name={item.name} image={item.image} amount={item.amount} key={item.name} />
                }
            })}
        </div>
        </div>
    )
    
  }
}
