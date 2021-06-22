import React, { Component } from 'react';
import PDF from './PDF';
import Webcam from 'react-webcam';

import Navbar from './Navbar'
import Footer from './Footer'




class Post extends Component {

    state = {
        friend: '',
        date: '',
        food: '',
        idNumber: 420,
        finishDate: "04/20/22",
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
            alert('Ingresa todos los datos compa :)');
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
                        <Navbar/>
                        <div className="pb-6">
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
                                            <input className="h-8 input-form w-4/5 lg:w-full px-4 " maxLength={"15"} onChange={this.onChange('friend')} name="friend" type="text" placeholder="Nombre"/>
                                            <input className="h-8 input-form w-4/5 lg:w-full mt-6 px-4 " maxLength={"15"} type="text" onChange={this.onChange('food')} name="food" placeholder="En caso de pálida..."/>
                                            <input className="h-8 input-form w-4/5 lg:w-full mt-6 px-4 " type="date" onChange={this.onChange('date')} name="date" placeholder="Fecha de nacimiento" min="1950-01-01" max="2002-12-31" />
                                        </div>
                                    </div>
                                    <div className="mt-10 flex justify-center flex-col items-center">
                                        <Webcam
                                            className="recorte-video h-52 w-5/6 shadow-xl"
                                            audio={false}
                                            ref={node => this.webcam = node}
                                            videoConstraints={this.videoConstraints}
                                            minScreenshotHeight={100}
                                            minScreenshotWidth={260}
                                        /> 
                                        <a type="button" onClick={this.sunmitPost} className="button-photo mt-8 shadow-lg">
                                            <b>Tomar foto y enviar</b>
                                        </a>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <Footer />
                    </div>) : (
                        <PDF friend={this.state.friend} date={this.state.date} screenshot={this.state.screenshot} food={this.state.food} idNumber={this.state.idNumber} finishDate={this.state.finishDate} />
                    )
                }
            </>
        );
    }
}

export default Post;