import React from 'react'
import RouteForm from './components/RouteForm'
import SideBar from './components/SideBar'
import { Col, Container, Row } from "react-bootstrap";

export default function AdminRoutes() {
  return (
    <div>
         <Row md={2} sm={1}>
        <Col md={2} sm={12}>
          <SideBar />
        </Col>
        <Col md={10} sm={12}>
          <Container fluid className="w-75 mx-4 my-4">
            <RouteForm />
          </Container>
        </Col>
      </Row>
    </div>
  )
}
