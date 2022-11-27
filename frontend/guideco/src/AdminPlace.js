import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PlaceForm from "./components/PlaceForm";
import SideBar from "./components/SideBar";

export default function Admin() {
  return (
    <div>
      <Row md={2} sm={1}>
        <Col md={2} sm={12}>
          <SideBar />
        </Col>
        <Col md={10} sm={12}>
          <Container fluid className="w-75 mx-4 my-4" >
            <PlaceForm />
          </Container>
        </Col>
      </Row>
    </div>
  );
}
