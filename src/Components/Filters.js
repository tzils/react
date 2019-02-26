import React, { Component } from 'react'
import Products from "../products.json";

export default class Catalogue extends Component {
    search = {
        text: '',
        manufacturer: 'all'
    };

    clearState = () => {
        this.search = {text: '', manufacturer: 'all'};
        this.props.onChange(this.search);
    };

    onSearch = event => {
        this.search.text = event.target.value;
        this.props.onChange(this.search);
    };

    onCheckbox = event => {
        this.search.manufacturer = event.target.value;
        this.props.onChange(this.search);
    };

    render() {
        return (
            <div className="filter">
                <div className="filter-header">
                    <h4>Search</h4>
                    <a href="#" className="clear" onClick={this.clearState}>Clear</a>
                </div>
                <div>
                    <input type="text" placeholder="search..." 
                           value={this.search.text}
                           onChange={this.onSearch}/>
                </div>
                <h4>Manufacturer</h4>
                <div>
                    <div>
                    <input type="radio" name="manufacturer" id="all"
                           value={this.search.manufacturer}
                           checked={this.search.manufacturer === 'all'}
                           onChange={this.onCheckbox}/>
                    <label htmlFor="all">All</label>
                    </div>
                    {Products.map(p => p.manufacture) .filter((v, i, s) => s.indexOf(v) === i) .map(manu => {
                    return <div key={manu}>
                    <input type="radio" name="manufacturer" id={manu} value={manu}
                           checked={this.search.manufacturer === manu}
                           onChange={this.onCheckbox}/>
                           <label htmlFor={manu}>{manu}</label>
                            </div>
                     })}
                </div>
            </div>
        );
    }
}