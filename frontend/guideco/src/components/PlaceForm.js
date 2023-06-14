import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function PlaceForm() {
  const [descriptionState, setDescriptionState] = useState(null);
  const [nameState, setNameState] = useState(null);
  const [addressState, setAddressState] = useState(null);
  const [cityState, setCityState] = useState(null);
  const [departmentState, setDepartmentState] = useState(null);
  const [fileState, setFileState] = useState(null);
  let file;

  useEffect(() => {
    file = fileState
    console.log(file);
    // setFile(fileState);
  }, [fileState]);

  return (
    <div>
      <Form
        onSubmit={async () => {
          const submitData = {
            nombre: nameState,
            descripcion: descriptionState,
            direccion: addressState,
            municipio: cityState,
            departamento: departmentState,
          };
          await axios
            .post("http://localhost:8083/api/lugar", submitData)
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa un nombre"
            onChange={(e) => {
              const inputName = e.target.value;
              setNameState(inputName);
            }}
          />
          <Form.Text className="text-muted">
            Ingresa un nombre característico del lugar.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa una descripción"
            onChange={(e) => {
              const inputDescrip = e.target.value;
              setDescriptionState(inputDescrip);
            }}
          />
          <Form.Text className="text-muted">
            Describe las características y detalles del lugar.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa una dirección"
            onChange={(e) => {
              const inputAddress = e.target.value;
              setAddressState(inputAddress);
            }}
          />
          <Form.Text className="text-muted">
            Ingresa la dirección en donde se encuentra ubicado.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Municipio</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa un municipio"
            onChange={(e) => {
              const inputCity = e.target.value;
              setCityState(inputCity);
            }}
          />
          <Form.Text className="text-muted">
            Municipio donde se encuentra ubicado
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Departamento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa un departamento"
            onChange={(e) => {
              const inputDepartment = e.target.value;
              setDepartmentState(inputDepartment);
            }}
          />
          <Form.Text className="text-muted">
            Departamento donde se encuentra ubicado
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Elige las imagenes</Form.Label>
          <Form.Control
            multiple
            type="file"
            accept="image/*"
            onChange={(e) => {
              setFileState(e.target.files[0]);
            }}
          />
        </Form.Group>
        <Button
          type="submit"
          variant="primary"
        >
          Agregar
        </Button>
        <Button
          variant=""
          type="button"
          className="button mx-3 "
          style={{ color: "#CC3300" }}
          onClick={() => {
            const submitData = {
              nombre: nameState,
            };
          }}
        >
          Eliminar
        </Button>
      </Form>
    </div>
  );
}
