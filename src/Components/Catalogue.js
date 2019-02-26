import React, { Component } from 'react'
import Product from './Product';
import SectionTitle from './SectionTitle';
import Products from "../products.json";
import _ from 'lodash'
import Filters from './Filters';
import '../Styles/Main.css';

export default class Catalogue extends Component {
    state = {filtered: Products};

    onChange = (search) => {
        let array = _.filter(Products, (field) => {
            return field.name.includes(search.text)
        });
        if(search.manufacturer !== 'all') {
            array = _.filter(array, (field) => {
                return field.manufacture.includes(search.manufacturer)
            });
        }
        this.setState({filtered: array})
    };


    render() {
    return (
    <div className="container">
    <SectionTitle name="CATALOG" />
    <div className="catalog">
        <div className="column-left">
            <Filters onChange={this.onChange}/>
        </div>
        <div className="column-right">
        <div className="products">
            {this.state.filtered.map(p => <Product key={p.name} name={p.name} amount={p.amount} image={p.image} />)}
        </div>
    </div>
    </div>
    </div>
    )
  }
}
