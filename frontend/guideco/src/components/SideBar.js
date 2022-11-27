import React from "react";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import "../css/sideBar.css"
import image from "../images/GuideCO.png"
export default function SideBar() {
  return <div><div class="container-fluid" style={{minWidth:"40rem"}}>
    <div class="row min-vh-100 flex-column flex-md-row">
      <aside class="col-12 col-md-3 col-xl-2 p-0 " style={{backgroundColor:"#f7cf69"}}>
        <nav class="navbar navbar-expand-md navbar-dark bd-dark flex-md-column flex-row align-items-center py-2 text-center sticky-top " id="sidebar">
          <div class="text-center p-3">
            <img src={image} alt="profile picture" class="img-fluid rounded-circle my-4 p-1 d-none d-md-block shadow"/>
           <a href="#" class="navbar-brand mx-0 font-weight-bold  text-nowrap" style={{color:"#2b5d65"}}>Admin</a>
          </div>
              <button type="button" class="navbar-toggler border-0 order-1" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse order-last" id="nav">
            <ul class="navbar-nav flex-column w-100 justify-content-center">
            <li class="nav-item">
              <a href="/admin" class="nav-link active"> Lugares</a>
            </li>
            <li class="nav-item">
              <a href="/admin-ruta" class="nav-link"> Rutas </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link"> Alojamiento </a>
            </li>
          </ul>
          </div>      
        </nav>   
      </aside>
    </div>
  </div></div>;
}
