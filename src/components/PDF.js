import React from 'react';
import Pdf from "react-to-pdf";



const ref = React.createRef();






const PDF = (props) => {

  

  return (
    <>
      <div className="credential" ref={ref}>
          <div className="credential-info mt-16">
            <div className="credential-foto">
                <img src={props.screenshot} className="mora-photo"/>
            </div>
            <div className="credential-text">
              <p style={{marginTop:"82px"}}>{props.friend}</p>
              <p style={{marginTop:"23px"}} >{props.food}</p>
              <p style={{marginTop:"23px"}} >{props.date}</p>
            </div>
          </div>
          <p>

            </p>
          </div>  
          <div>
      </div>

      <div style={{marginTop:"20vh"}} >
        <Pdf targetRef={ref} filename="borreAmigo.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Generar Credencial</button>}
        </Pdf>
      </div>

    </>
  );
}

export default PDF;