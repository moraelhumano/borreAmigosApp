import React, { Component } from 'react';
import Webcam from "react-webcam";
import PDF from './PDF';



class Post extends Component {

    state = {
        title: '',
        content: '',
        id: '',
        logoNivel: '',
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
        this.showLogo();
        if(!this.state.title || !this.state.content){
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
                    (<div className="container">
                        <div className="jumbotron mt-3 margirn-top-zero margirn-bottom-zero">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">
                                            <fieldset>
                                                <legend className="text-center header">Agrega un nuevo miembro al culto</legend>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('title')} name="title" type="text" placeholder="Nombre del iniciado" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('id')} name="id" type="number" placeholder="id" className="form-control"  maxLength={3} />
                                                </div>
                                                <div className=" select-nivel-container">
                                                    <label for="niveles">Elige el nivel del iniciado</label>
                                                        <select onChange={this.onChange('content')}  name="content">
                                                        <option >Selecciona un nivel</option>
                                                        <option name="datsunName" value="Pasajeros del Datsun">Pasajeros del Datsun</option>
                                                        <option name="poquianchinName" value="Apóstoles de las Poquianchis">Apóstoles de las Poquianchis</option>
                                                        <option name="mothmanName" value="Testigos del Mothman">Testigos del Mothman</option>
                                                        <option value="Cocineros del Nganga">Cocineros del Nganga</option>
                                                        <option value="Criadores de Chupacabras">Criadores de Chupacabras</option>
                                                        <option value="Agente Especial">Agente Especial</option>
                                                        </select>
                                                </div>
                                                <div>
                                                    <Webcam
                                                        className="recorteVideo"
                                                        audio={false}
                                                        ref={node => this.webcam = node}
                                                        videoConstraints={this.videoConstraints}
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
                        <PDF title={this.state.title} content={this.state.content} id={this.state.id} logoNivel={this.state.logoNivel} screenshot={this.state.screenshot} />
                    )
                }
            </>
        );
    }
}

export default Post;