import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../AB3.png'
import styled from 'styled-components'
import {ButtonContainer} from './Button'
import Login from './Login';
import { ProductConsumer } from '../context';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar  navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" height="50px" width="40px"></img>
                </Link>
                <ul className="navbar-nav ">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>
                <div className="button-wrapper d-flex flex-row justify-content-end">
                <Link to="/cart" className="">
                    <ButtonContainer >
                        <span className="mr-2">
                        <i className="fa fa-cart-plus" ></i>
                        </span>
                        My cart
                    </ButtonContainer>
                </Link>

                 <ProductConsumer>
                    {value => {
                        const { userLoggedIn,logOutUser } = value;
                        if(!userLoggedIn){
                            return(
                            <Link to="/login" className="">
                             <ButtonContainer>
                                 Login
                             </ButtonContainer>
                            </Link>
                            )
                        }
                        else {
                            return (<ButtonContainer onClick={()=> logOutUser()}>
                                Logout
                            </ButtonContainer>)
                        }
                    }}
                </ProductConsumer>
                </div>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav `
background:var(--mainRed);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`