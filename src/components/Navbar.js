import React, { Component } from 'react';
import borreLogo from '../logoBorre.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Navbar extends Component {


    render(){

        return(
            <>
                <nav className="shadow-lg md:justify-between md:px-6 sm:justify-center">
                    <Link to="/">
                        <img className="nav w-32" src={borreLogo} />
                    </Link>
                </nav>
            </>
        );
    }
}

export default Navbar;