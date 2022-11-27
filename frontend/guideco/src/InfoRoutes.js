import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import React from "react";
import { Carousel } from "react-bootstrap";
import imageT from "./images/Colores.jpg";
import icon from "./images/back.png"
export default function InfoRoutes() {
  const test = {
    img: ["img1.jpg", "img2.jpg", "img3.jpg"],
    nombre: "Ruta Del Caribe",
    descripcion:
      "La ruta más emblematica para recorrer todo el caribe colombiano",
    departamento: "Atlantico",
  };
  return (
    <div style={{ backgroundColor: "#F2F8FF" }}>
      <MDBNavbar expand="lg" light className="mainNav">
        <MDBContainer fluid style={{height:60}}>
          <MDBNavbarBrand href="#">
            <img src={icon} height="30" loading="lazy" />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      <div >
        <h3 className="m-3" >{test.nombre}</h3>
      </div>
      <div
        className="bg-opacity-25 container-fluid d-flex justify-content-center "
        style={{ backgroundColor: "#F2F8FF" }}
      >
        <Carousel style={{ height: 500 }} className="m-3 w-50 ">
          {test.img.map((image) => {
            return (
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={imageT}
                  style={{ height: 500, width: 100 }}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div>
        <h5 className="mx-3">Descripción: {test.descripcion}</h5>
        <h5 className="mx-3">Departamento: {test.departamento}</h5>
      </div>
    </div>
  );
}