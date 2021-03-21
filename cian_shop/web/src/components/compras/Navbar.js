import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


export default class Navbar extends Component{
    render(){
        return(
        <nav className="navbar navbar expand-sm bg-primary navbar-dark px-sm-5">

            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        Cian_Shop
                    </Link>
                </li>
            </ul>
        </nav>
        )
    }
}

const NavWrapper = styled.nav`
.nav-link{
    color:var(--blanco);
    font-size: 1.3rem;
    
}
`;