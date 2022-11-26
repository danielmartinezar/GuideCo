import React from "react";
import Navbar from "./components/Navbar";
import { Card, Row, Col } from "react-bootstrap";
export default function RoutesPage() {
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

  return (
    <div>
      <Navbar />
      <div className="container-fluid" style={{ backgroundColor: "#E2E2E2" }}>
        {/* <h3 style={{ textAlign: "center", padding: "8px" }}>
          Rutas En El Atlantico
        </h3> */}
        <Row xs={1} md={4} className="g-4 p-3">
          {routes.map((route) => {
            return (
              <Col>
                <Card style={{height:"35rem", width:"21rem"}}>
                  <Card.Body>
                    <Card.Title>{route.Title}</Card.Title>
                    <Card.Text>
                      {route.Description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
