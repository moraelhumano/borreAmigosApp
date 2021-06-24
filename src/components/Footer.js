import React, { Component } from 'react';



class Footer extends Component {


    render(){

        return(
            <>
            <footer className="h-full bg-primary-dark pt-6 px-6">
                <div className="flex flex-col pt-2">
                    <p className="text-white font-bold text-center mb-4">¡Sígueme en insta para más cosas chidas!</p>
                    <div className="flex flex-col text-center">
                        <a  href="https://www.instagram.com/ladelaintuicion/">
                            <p className="text-white font-bold">App creada por: @laDeLaIntuicion</p>
                        </a>
                        <a href="https://www.instagram.com/mariolopezcapi/" className="text-white font-bold text-base">Inspirado en: @marioLopezCapi</a>
                        <a href="https://www.instagram.com/lavanduli/" className="text-white font-bold text-base">Ilustración de: @lavanduli</a>
                    </div>   
                </div>
                <hr className="mt-4"/>
                <div className="flex justify-center mt-4 flex-col items-center pb-4">
                    <p className="text-base text-white text-center md:text-left mt-2 mb-1">
                        Esta es una fanpage, no es un sitio oficial
                    </p>
                </div>
            </footer>
            </>
        );
    }
}

export default Footer;