import React from 'react';
import Pdf from "react-to-pdf";

import Navbar from './Navbar'
import Footer from './Footer'





const ref = React.createRef();






const PDF = (props) => {

  

  return (
    <>
      <Navbar/>
      <div className="credential pb-6" ref={ref}>
          <div className="credential-info mt-16">
            <div className="credential-foto">
                <img src={props.screenshot} className="mora-photo"/>
            </div>
            <div className="credential-text">
              <p style={{ paddingLeft: '42px', paddingTop:'5px'}}>{props.friend}</p>
              <p style={{ paddingLeft: '66px', paddingTop:'0px'}} >{props.date}</p>
              <p style={{ paddingLeft: '80px', paddingTop:'0px'}}>{props.finishDate}</p>
              <p>{props.idNumber }</p>
              <p className="text-food text-white font-extrabold text-food" style={{color:'white' }}>{props.food}</p>
            </div>
          </div>
          </div>  
          <div className="flex flex-col md:justify-center text-left px-10 md:px-10 mt-6">
              <p className=" self-center font-bold text-lg">
                <b>¡Ahora ya eres parte los amigos de borre!</b>
              </p>
              <b className="font-bold">
                <p>Instrucciones:</p>
              </b>
              <p>Saca un screenshot de tu ID y compartela en Instagram (No olvides etiquetarnos ;D) <a href="https://www.facebook.com/groups/280809279600262/" className="text-blue-700 underline">El Borre</a><a href="https://www.facebook.com/groups/280809279600262/" className="text-blue-700 underline ml-2">El Programador :D </a></p>
              <p>También puedes compartirla en el grupo oficial en <a href="https://www.facebook.com/groups/280809279600262/" className="text-blue-700 underline">Facebook</a> </p>
              <p>Nos mantenemos mejorando el sistema, prueba descargando tuID en PDF ;)</p>
          </div>

          <div className="flex justify-center w-full mt-6 pb-6" >
            <Pdf targetRef={ref} filename="borreAmigo.pdf">
              {({ toPdf }) => <button className="button-photo shadow-lg" onClick={toPdf}>Generar Credencial</button>}
            </Pdf>
          </div>
      <Footer />
    </>
  );
}

export default PDF;