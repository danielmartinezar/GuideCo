const TABLE = "Lugar";
import { nanoid } from "nanoid";
import axios from "axios";
import config from "../../config.js";

let URL = `http://localhost:${config.STORE_PORT}`;

export default function controller() {
  async function list() {
    return await axios.get(URL + `/${TABLE}`);
  }
  async function get(id) {
    return await axios.get(URL + `/${TABLE}/${id}`);
  }
  async function insert(body) {
    const place = { id: nanoid(), ...body };
    return await axios.post(URL + `/${TABLE}`, place);
  }
  async function update(body) {
    const place = { ...body };
    return await axios.put(URL + `/${TABLE}`, place);
  }
  async function del(id) {
    return await axios.delete(URL + `/${TABLE}/${id}`);
  }
  return { list, get, update, insert, del };
}
