import React, { useState } from "react";
import navbarIcon from "../images/navbaricon.png"
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";
import image from "../images/GuideCO.png";
import logOutIcon from "../images/logout.png";
import "../css/Navbar.css";
export default function Navbar() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <div>
      <MDBNavbar expand="lg" light className="mainNav">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img src={image} height="90" loading="lazy" />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavSecond(!showNavSecond)}
          >
            <MDBIcon icon="fa-bars" fas className="hamburger"/>
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavSecond}>
            <MDBNavbarNav>
              <MDBNavbarLink active aria-current="page" href="/home">
                Home
              </MDBNavbarLink>
              <MDBNavbarLink  href="/rutas">Rutas</MDBNavbarLink>
              <MDBNavbarLink href="/alojamiento">Alojamiento</MDBNavbarLink>
              <MDBNavbarNav className="justify-content-end">
                <MDBNavbarLink href="#">Configuración</MDBNavbarLink>
                <MDBNavbarLink href="#">Log-Out</MDBNavbarLink>
                <MDBNavbarBrand>
                  <img src={logOutIcon} height="20" />
                </MDBNavbarBrand>
              </MDBNavbarNav>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
