import React, { Component } from 'react';

import borreLogo from '../logoBorre.png';


class Navbar extends Component {


    render(){

        return(
            <>
                <nav className="shadow-lg">
                    <img src={borreLogo} />
                </nav>
            </>
        );
    }
}

export default Navbar;