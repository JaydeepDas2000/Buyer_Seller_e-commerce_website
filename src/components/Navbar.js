import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo_nav.png';
import styled from 'styled-components'
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={Logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <Link to="/" className="nav-link">
                        Products
                    </Link>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                        <i className="fas fa-cart-plus"/>
                        </span>
                        My Cart
                        
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background:var(--navBlack);
    .nav-link{
        color:var(--mainWhite) !important;
        front-size:1.3rem;
        text-transform:capitalize;
    }
`;