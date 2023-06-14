const TABLE = "ruta";
import { nanoid } from "nanoid";
import axios from "axios";
import config from "../../config.js";
import assignPlace from "./assignPlace.js";
let URL_DATABASE_SERVICE = `http://localhost:${config.STORE_PORT}`;

export default function controller() {
  const asPlace = assignPlace(URL_DATABASE_SERVICE, "lugar_asignado", axios);

  async function list() {
    return await axios.get(URL_DATABASE_SERVICE + `/${TABLE}`);
  }
  async function get(id) {
    return await axios.get(URL_DATABASE_SERVICE + `/${TABLE}/${id}`);
  }
  async function insert(body) {
    const { lugares_asignados, nombre, descripcion } = body.data;
    const id = nanoid();
    const { images } = body;

    const route = { id, nombre, descripcion };
    const resp = await axios.post(URL_DATABASE_SERVICE + `/${TABLE}`, route);
    asPlace.insert(id, lugares_asignados);

    Promise.allSettled(
      images.map(async (image) => {
        await axios.post(`http://localhost:${config.AWS_PORT}/api/image`, {
          data: { idRuta: id },
          image,
        });
      })
    );

    return resp;
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
