import React, { Component } from 'react';
import PDF from './PDF';
import Webcam from 'react-webcam';

import borreLogo from '../logoBorre.png';
import moraPhoto from '../mora.jpeg';


class Post extends Component {

    state = {
        friend: '',
        date: '',
        food: '',
        postSubmitted: false,
        screenshot: null,
        tab: 0,
        facingMode: '',
    }


    handleClick = () => {
        const screenshot = this.webcam.getScreenshot({width: 120, height: 110});
        return this.setState({ screenshot });
        
      }
     

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    videoConstraints = () => {
        this.state.facingMode = "user"
      };




    sunmitPost = (e) => {
        this.handleClick();
        if(!this.state.friend || !this.state.date || !this.state.food){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }

 
    
    
    




    render(){

        return(
            <>
                {  !this.state.postSubmitted ? 
                    (<div className="">
                      <nav>
                          <img src={borreLogo} />
                      </nav>
                        <div className="">
                            <div className="mt-10 text-3xl flex flex-col justify-center items-center">
                                <p>Únete al club de los</p>
                                <p>amigos de Borre</p>
                                <hr className="mt-2 w-8 h-0.5 bg-primary-dark" />
                            </div>
                            <form className="mt-6" method="post">
                                <fieldset>
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="items-center">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                            <input className="h-8 input-form" onChange={this.onChange('friend')} name="friend" type="text" placeholder="Nombre"/>
                                            <input className="h-8 input-form mt-6" type="text" onChange={this.onChange('food')} name="food" placeholder="En caso de pálida..."/>
                                        </div>
                                        <input className="input-form mt-6 lg:mt-8" type="date" onChange={this.onChange('date')} name="date"  min="1950-01-01" max="2002-12-31" />
                                    </div>
                                    <div className="mt-10 flex justify-center flex-col items-center">
                                        <Webcam
                                            className="recorte-video h-52 w-5/6"
                                            audio={false}
                                            ref={node => this.webcam = node}
                                            videoConstraints={this.videoConstraints}
                                            minScreenshotHeight={100}
                                            minScreenshotWidth={260}
                                        /> 
                                        <a type="button" onClick={this.sunmitPost} className="button-photo mt-8">
                                            <b>Tomar foto y enviar</b>
                                        </a>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <footer className="h-full bg-primary-dark mt-8 pt-6 px-6">
                            <div className="flex flex-col text-left pt-2">
                                <a  href="https://www.instagram.com/ladelaintuicion/">
                                <div className="flex flex-col">
                                    <p className="text-white font-bold text-l text-center">¡Sígueme en insta para más cosas chidas!</p>
                                    <img src={moraPhoto} id="mora-photo" className="self-center mt-4"/>  
                                    <p className="text-white font-bold text-l mt-4">App creada por: @laDeLaIntuicion</p>
                                </div>
                                </a>
                                <a href="https://www.instagram.com/mariolopezcapi/" className="text-white font-bold text-base mt-2">Inspirado en: @marioLopezCapi</a>
                                <a href="https://www.instagram.com/lavanduli/" className="text-white font-bold text-base mt-2">Ilustración de: @lavanduli</a>
                            </div>
                            <hr className="mt-4"/>
                            <div className="flex justify-center mt-4 flex-col items-center pb-4">
                                <img src={borreLogo} className="footer-logo"/>
                                <p className="text-base text-white text-left mt-2">
                                    Esta es una fanpage, no es un producto oficial
                                </p>
                            </div>
                        </footer>
                    </div>) : (
                        <PDF friend={this.state.friend} date={this.state.date} screenshot={this.state.screenshot} food={this.state.food} />
                    )
                }
            </>
        );
    }
}

export default Post;