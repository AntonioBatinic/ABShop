import React, { Component } from 'react'
import {ProductConsumer } from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) =>{
                    const {id,img,info,price,title,inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title start */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* title end*/}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"></img>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2> model : {title} </h2>
                                    <h4 className= "text-red">
                                        <strong>
                                            price: <span>€</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        info:
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/*buttons*/}
                                    <div>
                                        <Link to ='/'>
                                            <ButtonContainer>Back to products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart
                                        disabled = {inCart?true:false}
                                        onClick ={() => {
                                            value.addToCart(id);
                                            value.openModel(id);
                                        }}>
                                            {inCart?'In Cart' :'Add to cart'}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
