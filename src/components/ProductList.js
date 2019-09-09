import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import { ProductConsumer } from '../context'

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        let filteredProducts = [];

    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        console.log("handleChange")
        this.setState({value: event.target.value});
        //this.filteredProducts = thprops.products.filter(item => item.title.includes(event.target.value));
      }
    
      handleSubmit(event) {
        console.log("handleSubmit")
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title= "products"></Title>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Search</span>
                            </div>
                            <input type="text" value={this.state.value} onChange={this.handleChange} class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>                           
                            </div>
                        <div className="row">
                            <ProductConsumer>
                            {(value) => {
                                     return  value.products.map(product =>{
                                         return <Product key={product.id} product = {product} />
                                     })   
                                }}
                            </ProductConsumer>
                            </div>
                        </div>
                    </div>
            </React.Fragment>

        )
    }
}
/* 
return  value.products.map(product =>{
    return <Product key={product.id} product = {product} />
 */