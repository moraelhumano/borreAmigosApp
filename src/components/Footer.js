import React, { Component } from 'react';


class Footer extends Component {


    render(){

        return(
            <>
            <footer className="h-full bg-primary-dark mt-8 pt-6 px-6">
                <div className="flex flex-col text-left pt-2">
                    <a  href="https://www.instagram.com/ladelaintuicion/">
                        <div className="flex flex-col">
                            <p className="text-white font-bold text-l text-center">¡Sígueme en insta para más cosas chidas!</p>
                            <p className="text-white font-bold text-l mt-4">App creada por: @laDeLaIntuicion</p>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/mariolopezcapi/" className="text-white font-bold text-base mt-2">Inspirado en: @marioLopezCapi</a>
                    <a href="https://www.instagram.com/lavanduli/" className="text-white font-bold text-base mt-2">Ilustración de: @lavanduli</a>
                </div>
                <hr className="mt-4"/>
                <div className="flex justify-center mt-4 flex-col items-center pb-4">
                    <p className="text-base text-white text-left mt-2 mb-1">
                        Esta es una fanpage, no es un producto oficial
                    </p>
                </div>
            </footer>
            </>
        );
    }
}

export default Footer;