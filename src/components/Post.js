import React, { Component } from 'react';
import PDF from './PDF';
import Webcam from 'react-webcam';

import borreLogo from '../logoBorre.png';


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
                            </div>
                            <form className="mt-4" method="post">
                                <fieldset>
                                    <div className="flex flex-col justify-center items-center">
                                        <div>
                                        <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                        <input className="h-8 input-form" onChange={this.onChange('friend')} name="friend" type="text" placeholder="Nombre"/>
                                        </div>
                                        <input className="h-8 input-form" type="text" onChange={this.onChange('food')} name="food" />
                                        <input className="input-form mt-4 lg:mt-8" type="date" onChange={this.onChange('date')} name="date"  min="1950-01-01" max="2002-12-31" />
                                    </div>
                                    <div className="mt-10 flex justify-center flex-col items-center">
                                        <Webcam
                                            className="recorte-video w-5/6"
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
                    </div>) : (
                        <PDF friend={this.state.friend} date={this.state.date} screenshot={this.state.screenshot} food={this.state.food} />
                    )
                }
            </>
        );
    }
}

export default Post;