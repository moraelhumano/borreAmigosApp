import React, { Component } from 'react';
import PDF from './PDF';
import Webcam from 'react-webcam';

import borreLogo from '../logoBorre.png';


class Post extends Component {

    state = {
        title: '',
        date: '',
        postSubmitted: false,
        screenshot: null,
        tab: 0,
        facingMode: '',
    }


    handleClick = () => {
        const screenshot = this.webcam.getScreenshot();
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
        if(!this.state.title || !this.state.date){
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
                            <div className="">
                                <div className="">
                                    <div className="">
                                        <form className="" method="post">
                                            <fieldset>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('title')} name="title" type="text" placeholder="Nombre del iniciado" className="form-control" />
                                                </div>
                                                <div>
                                                  <input type="date" onChange={this.onChange('date')} name="date"  
                                                        min="1950-01-01" max="2002-12-31" />
                                                </div>
                                                <div>
                                                    <Webcam
                                                        className="recorteVideo"
                                                        audio={false}
                                                        ref={node => this.webcam = node}
                                                        videoConstraints={this.videoConstraints}
                                                        height={720}
                                                        width={360}
                                                    /> 
                                                </div>
                                                <div className="form-group">
                                                    <button type="button" onClick={this.sunmitPost} className="btn btn-primary btn-lg">Tomar foto y enviar</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                        <PDF title={this.state.title} date={this.state.date} screenshot={this.state.screenshot} />
                    )
                }
            </>
        );
    }
}

export default Post;