import { nanoid } from "nanoid";
import axios from "axios";
import config from "../../config.js";
import multer from "multer";
import aws from "aws-sdk";
const TABLE = "imagen_asignada";

let URL_DATABASE_SERVICE = `http://localhost:${config.STORE_PORT}`;

export default function controller() {
  async function list() {
    return await axios.get(URL_DATABASE_SERVICE + `/${TABLE}`);
  }
  async function get(id) {
    return await axios.get(URL_DATABASE_SERVICE + `/${TABLE}/${id}`);
  }
  async function insert(data, img) {
    
    const id = nanoid();
    const link = img;
    const image = {
      id,
      idLugar: data?.idLugar,
      idRuta: data?.idRuta,
      link,
    };
    return await axios.post(URL_DATABASE_SERVICE + `/${TABLE}`, image);
  }
  async function update(body) {
    const { lugares_asignados, nombre, descripcion } = body;
    const route = {};

    return await axios.put(URL_DATABASE_SERVICE + `/${TABLE}`, route);
  }
  async function del(id) {
    return await axios.delete(URL_DATABASE_SERVICE + `/${TABLE}/${id}`);
  }

  return { list, get, update, insert, del };
}
