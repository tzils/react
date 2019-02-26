import React, { Component } from 'react'
import '../Styles/Main.css';

export default class Product extends Component {
  render() {
    return (
        <div className='product'>
         <img src={this.props.image}/>
         <p className='price'>{this.props.amount}</p>
         <h3>{this.props.name}</h3>
         </div>
    )
  }
}
