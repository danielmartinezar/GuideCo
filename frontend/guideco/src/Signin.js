import React, { useState } from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";
import axios from "axios";
import "./css/Signin.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Home from "./Home";

function Signin() {
  const [emailState, setEmailState] = useState(null);
  const [nameState, setNameState] = useState(null);
  const [surnameState, setSurnameState] = useState(null);
  const [passwordState, setPasswordState] = useState(null);
  const [passwordConfirmState, setPasswordConfirmState] = useState(null);

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/home");
  };

  return (
    <div className="bg">
        <MDBContainer
          fluid
          className="d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "" }}
        >
          <div className="mask gradient-custom-3"></div>
          <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
            <MDBCardBody className="px-5">
              <h2 className="text-uppercase text-center mb-5">
                Crear una cuenta
              </h2>
              <MDBInput
                wrapperClass="mb-4"
                label="Nombre"
                size="lg"
                id="form1"
                type="text"
                onChange={(e) => {
                  const inputName = e.target.value;
                  setNameState(inputName);
                }}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Apellidos"
                size="lg"
                id="form2"
                type="text"
                onChange={(e) => {
                  const inputEmail = e.target.value;
                  setEmailState(inputEmail);
                }}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Correo Electrónico"
                size="lg"
                id="form5"
                type="email"
                onChange={(e) => {
                  const inputSurname = e.target.value;
                  setSurnameState(inputSurname);
                }}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Contraseña"
                size="lg"
                id="form3"
                type="password"
                onChange={(e) => {
                  const inputEmail = e.target.value;
                  setPasswordState(inputEmail);
                }}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Repite la contraseña"
                size="lg"
                id="form4"
                type="password"
                onChange={(e) => {
                  const inputconfirmedPassword = e.target.value;
                  setPasswordConfirmState(inputconfirmedPassword);
                }}
              />
              <div className="d-flex flex-row justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  label="Acepto todos los terminos y condiciones"
                />
              </div>
                <MDBBtn
                  className="mb-4 w-100 gradient-custom-4"
                  size="lg"
                  onClick={() => {
                    const registerData = {
                      name: nameState,
                      surname: surnameState,
                      email: emailState,
                      password: passwordState,
                    };
                    navigateHandler();
                    console.log(registerData);
                  }}
                >
                  Registrarse
                </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
    </div>
  );
}

export default Signin;
