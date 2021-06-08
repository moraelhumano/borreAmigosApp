import React from 'react';
import Pdf from "react-to-pdf";



const ref = React.createRef();






const PDF = (props) => {

  // if(props.content === "Testigos del Mothman" ){
  //     props.image = mothmanLogo;
  // }

  console.log(props)

  

  return (
    <>
      <div className="Post" ref={ref}>
          <div className="credential">
          <div className="credential-foto">
                <img src={props.screenshot} className=""/>
              </div>
            <div className="credential-info">
              <div className="credential-text">
                <p style={{marginTop:"82px"}}>{props.title}</p>
                <p style={{marginTop:"23px"}} >{props.id}</p>
                <p className="credential-nivel" style={{marginTop:"16px"}} >{props.content}</p>
                <div className="image-id-content">
                  <img src={props.logoNivel} className="logoNivel"/>  
                </div>
              </div>
            </div>
          </div>
          <p>
              Bienvenido a nuestro al culto/no culto: un podcast en donde cada semana nos reunimos a escuchar como  
              José Antonio Badía le cuenta a Eduardo Espinoza y Mario Capistran casos de crimen real, 
              fenómenos paranormales o eventos históricos tan peculiares, notorios o fantásticos que se ganaron el 
              título de Leyendas Legendarias.
            </p>
          </div>  
          <div>
      </div>

      <div style={{marginTop:"20vh"}} >
        <Pdf targetRef={ref} filename="credencialLegendaria.png">
          {({ toPdf }) => <button onClick={toPdf}>Generar Credencial</button>}
        </Pdf>
      </div>

    </>
  );
}

export default PDF;