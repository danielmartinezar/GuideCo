import React from "react";
import Navbar from "./components/Navbar";
import "./css/Home.css";

import { Carousel, Card, Stack, Button } from "react-bootstrap";

function Home() {
  function sortData(data) {
    let sortedData = [];
    data.map((route, index) => {
      sortedData.push(data.splice(0, 3));
    });
    const a = data.length > 0 ? sortedData.push(data.splice(0)) : null;
    return sortedData;
  }
  const routes = [
    {
      Title: "Ruta Del Sabor",
      Description:
        "La Ruta Del Sabor, tu ruta Favorita para ir a comer en barranquilla",
      Places: [
        { name: "NarcoBollo", address: "Cr 49c#99-30" },
        { name: "Pa la tienda", address: "calle 94 # 49" },
      ],
    },
    {
      Title: "Ruta Ecologica",
      Description: "Ruta ecologica para realizar senderismo en el atlantico",
      Places: [
        { name: "Volcan del Totumo", address: "Juan de Acosta, km 95" },
        { name: "Salinas de Galerazamba", address: "Via al mar km 50" },
      ],
    },
    {
      Title: "Ruta Cultural",
      Description: "De esta forma conoceras mejor al atlantico",
      Places: [
        { name: "Museo del caribe", address: "Cr 49c#99-30" },
        { name: "Museo del carnaval", address: "calle 94 # 49" },
      ],
    },
    {
      Title: "Ruta Del Sabor",
      Description:
        "La Ruta Del Sabor, tu ruta Favorita para ir a comer en barranquilla",
      Places: [
        { name: "NarcoBollo", address: "Cr 49c#99-30" },
        { name: "Pa la tienda", address: "calle 94 # 49" },
      ],
    },
    {
      Title: "Ruta Ecologica",
      Description: "Ruta ecologica para realizar senderismo en el atlantico",
      Places: [
        { name: "Volcan del Totumo", address: "Juan de Acosta, km 95" },
        { name: "Salinas de Galerazamba", address: "Via al mar km 50" },
      ],
    },
    {
      Title: "Ruta Cultural",
      Description: "De esta forma conoceras mejor al atlantico",
      Places: [
        { name: "Museo del caribe", address: "Cr 49c#99-30" },
        { name: "Museo del carnaval", address: "calle 94 # 49" },
      ],
    },
    {
      Title: "Ruta Ecologica",
      Description: "Ruta ecologica para realizar senderismo en el atlantico",
      Places: [
        { name: "Volcan del Totumo", address: "Juan de Acosta, km 95" },
        { name: "Salinas de Galerazamba", address: "Via al mar km 50" },
      ],
    },
    {
      Title: "Ruta Cultural",
      Description: "De esta forma conoceras mejor al atlantico",
      Places: [
        { name: "Museo del caribe", address: "Cr 49c#99-30" },
        { name: "Museo del carnaval", address: "calle 94 # 49" },
      ],
    },
    {
      Title: "Ruta Cultural",
      Description: "De esta forma conoceras mejor al atlantico",
      Places: [
        { name: "Museo del caribe", address: "Cr 49c#99-30" },
        { name: "Museo del carnaval", address: "calle 94 # 49" },
      ],
    },
    {
      Title: "Ruta Del Sabor",
      Description:
        "La Ruta Del Sabor, tu ruta Favorita para ir a comer en barranquilla",
      Places: [
        { name: "NarcoBollo", address: "Cr 49c#99-30" },
        { name: "Pa la tienda", address: "calle 94 # 49" },
      ],
    },
    {
      Title: "Ruta Ecologica",
      Description: "Ruta ecologica para realizar senderismo en el atlantico",
      Places: [
        { name: "Volcan del Totumo", address: "Juan de Acosta, km 95" },
        { name: "Salinas de Galerazamba", address: "Via al mar km 50" },
      ],
    },
    {
      Title: "Ruta Cultural",
      Description: "De esta forma conoceras mejor al atlantico",
      Places: [
        { name: "Museo del caribe", address: "Cr 49c#99-30" },
        { name: "Museo del carnaval", address: "calle 94 # 49" },
      ],
    },
    {
      Title: "Ruta Ecologica",
      Description: "Ruta ecologica para realizar senderismo en el atlantico",
      Places: [
        { name: "Volcan del Totumo", address: "Juan de Acosta, km 95" },
        { name: "Salinas de Galerazamba", address: "Via al mar km 50" },
      ],
    },
    {
      Title: "Ruta Cultural",
      Description: "De esta forma conoceras mejor al atlantico",
      Places: [
        { name: "Museo del caribe", address: "Cr 49c#99-30" },
        { name: "Museo del carnaval", address: "calle 94 # 49" },
      ],
    },
  ];
  const places = [
    {
      name: "Casa del carnaval",
      description:
        "lugar donde se originó el carnaval de barranquilla 2022, es lo mas capo que hay",
      address: "cr 38 # 40-18",
    },
    {
      name: "Museo Romano",
      description:
        "El lugar donde se puede vivir una buena vida",
      address: "cr 39 # 40-11",
    },
    {
      name:"Estadio Metropolitano",
      description:"Estadio de futbol del junior de barranquilla",
      address:"Av Murrillo-Av Circunvalar",
    }
  ];
  const sortedRoutes = sortData(routes);
  const sortedPlaces = sortData(places);
  console.log(sortedRoutes);
  return (
    <div>
      <Navbar />
      <div
        className="bg-opacity-25 container-fluid "
        style={{ backgroundColor: "#F2F8FF" }}
      >
        <h3 className="p-3">Rutas Recomendadas</h3>
        <Carousel style={{ height: 500 }} variant="dark">
          {sortedRoutes.map((packageRoutes) => {
            return (
              <Carousel.Item style={{ height: 500 }}>
                <Stack
                  direction="horizontal"
                  className="h-100 justify-content-center align-items-center"
                  gap={3}
                >
                  {packageRoutes.map((routes) => {
                    return (
                      <Card style={{ width: "25rem",minHeight:"25rem"}}>
                        <Card.Body>
                          <Card.Title>{routes.Title}</Card.Title>
                          <Card.Text>{routes.Description}</Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    );
                  })}
                </Stack>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div
        className="bg-opacity-25 container-fluid"
        style={{ backgroundColor: "" }}
      >
        <h3 className="p-3">Sitios Recomendados</h3>
        <Carousel style={{ height: 500 }} fade variant="dark">
          {sortedPlaces.map((packagePlaces) => {
            return (
              <Carousel.Item style={{ height: 500 }}>
                <Stack
                  direction="horizontal"
                  className="h-100 justify-content-center align-items-center"
                  gap={3}
                >
                  {packagePlaces.map((places) => {
                    return (
                      <Card style={{ width: "25rem",minHeight:"25rem"}}>
                        <Card.Body>
                          <Card.Title>{places.name}</Card.Title>
                          <Card.Text>{places.description}</Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    );
                  })}
                </Stack>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
export default Home;
