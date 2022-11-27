import React from "react";
import Navbar from "./components/Navbar";
import { Card, Row, Col } from "react-bootstrap";

export default function () {
  const routes = [
    {
      Title: "Ruta Del Sabor",
      Description:
        "La Ruta Del Sabor, tu ruta Favorita para ir a comer en barranquilla",
    },
    {
      Title: "Ruta Ecologica",
      Description: "Ruta ecologica para realizar senderismo en el atlantico",
    },
    {
      Title: "Ruta Cultural",
      Description: "De esta forma conoceras mejor al atlantico",
    },
    {
      Title: "Ruta Del Sabor",
      Description:
        "La Ruta Del Sabor, tu ruta Favorita para ir a comer en barranquilla",
    },
    {
      Title: "Ruta Ecologica",
      Description: "Ruta ecologica para realizar senderismo en el atlantico",
    },
    {
      Title: "Ruta Cultural",
      Description: "De esta forma conoceras mejor al atlantico",
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
                <Card style={{ height: "35rem", width: "21rem" }}>
                  <Card.Body>
                    <Card.Title>{route.Title}</Card.Title>
                    <Card.Text>{route.Description}</Card.Text>
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
