import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardImage,
} from "mdb-react-ui-kit";
import image from "../images/collage.png"
export default function Cards() {
  return (
    <MDBRow className="mt-5 p-5">  
      <MDBCol sm="6">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Ruta Del Sabor</MDBCardTitle>
            <MDBCardText>
              Esta ruta está enfocada a las personas que desean conocer más acerca de la gastronomía local de la región.
            </MDBCardText>
            <MDBBtn href="#">Vamos</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm="6">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Ruta Ecológica</MDBCardTitle>
            <MDBCardText>
              Ruta Recomendada para las personas que les encanta estar conectada con la naturaleza. Conoceras distintos sitios ecológicos de la región.
            </MDBCardText>
            <MDBBtn href="#">Vamos</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
