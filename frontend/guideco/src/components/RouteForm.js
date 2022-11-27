import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Select from "react-select";

function sortData(data) {
  const sorted = [];
  data.map((site, index) => {
    return sorted.push({ value: site.id, label: site.nombre });
  });
  return sorted;
}
export default function RouteForm() {
  const [nameState, setNameState] = useState(null);
  const [descriptionState, setDescriptionState] = useState(null);
  const [optionsState, setOptionsState] = useState([]);
  const [fileState, setFileState] = useState([]);
  const prueba = [
    {
      id: "abcdefg123",
      nombre: "Mirador De Puerto Colombia",
      descripcion:
        "Un Mirador que se encuentra a la orilla de uno de los mares mas hermosos",
      direccion: "calle 1a#22-30",
      municipio: "Puerto Colombia",
      departamento: "Atlantico",
    },
    {
      id: "a123",
      nombre: "Mirador Los Caimanes",
      descripcion:
        "Un Mirador que se encuentra a la orilla del gran Río Magdalena",
      direccion: "calle 72#40",
      municipio: "Barranquilla",
      departamento: "Atlantico",
    },
  ];
  const options = sortData(prueba);
  return (
    <div>
      <Form>
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
            Ingresa un nombre a la ruta.
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
            Ingresa una descripción con las características y detalles de la
            ruta.
          </Form.Text>
        </Form.Group>
        <Select
          isMulti
          name="place"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder="Selecciona los lugares que incluirás"
          onChange={(e) => {
            setOptionsState(Array.prototype.slice.call(e));
          }}
        />
        <Form.Group controlId="formFileMultiple" className="mb-3 my-4">
          <Form.Label>Elige la imagen de portada</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={(e) => {
              const files = Array.prototype.slice.call(e.target.files[0]);
              setFileState(files);
            }}
          />
        </Form.Group>
        <Button
          className="my-3"
          variant="primary"
          type="submit"
          onClick={() => {
            let lugares = [];
            optionsState.map((option) => {
              return lugares.push({ id: option.value });
            });
            const submitData = {
              nombre: nameState,
              descripcion: descriptionState,
              imagenes: fileState,
              lugares
            };
          }}
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
            }
          }}
        >
          Eliminar
        </Button>
      </Form>
    </div>
  );
}
