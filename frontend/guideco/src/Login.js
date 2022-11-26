import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
} from "mdb-react-ui-kit";
import "./css/Login.css";
import logo from "./images/GuideCO.png";

function Login() {
  return (
    <MDBContainer className="justify-content-center" >
      <MDBRow className="justify-content-center align-items-center m-5">
        <MDBCol col="6" className="mb-5">
          <MDBCard>
            <div className="d-flex flex-column ms-3">
              <div className="text-center">
                <img src={logo} style={{ width: "220px" }} alt="logo" />
              </div>

              <p className="mb-2 px-1">Inicia sesión con tu cuenta</p>

              <MDBInput
                wrapperClass="mb-2 px-1"
                label="Correo electrónico"
                id="form1"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-2 px-1"
                label="Contraseña"
                id="form2"
                type="password"
              />

              <div className="text-center pt-1 mb-5 pb-1 px-1">
                <MDBBtn className="mb-4 w-100 gradient-custom-2">
                  Ingresar
                </MDBBtn>
                <a className="text-muted" href="#!">
                  ¿Olvidaste la contraseña?
                </a>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">¿No tienes Cuenta?</p>
                <MDBBtn outline className="mx-2">
                  Registrarse
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
