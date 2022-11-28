const TABLE = "lugar";
import { nanoid } from "nanoid";
import axios from "axios";
import config from "../../config.js";

let URL_DB_SERVICE = `http://localhost:${config.STORE_PORT}`;

export default function controller() {
  async function list() {
    return await axios.get(URL_DB_SERVICE + `/${TABLE}`);
  }
  async function get(id) {
    return await axios.get(URL_DB_SERVICE + `/${TABLE}/${id}`);
  }
  async function insert(body) {
    console.log(body);
    const id = nanoid();
    const place = { id, ...body };
    await axios.post(URL_DB_SERVICE + `/${TABLE}`, place);

    // await axios.post(
    //   `http://localhost:${config.AWS_PORT}/api/image`,
    //   { "image": file, data: { idLugar: id } },
    //   { headers: { "Content-Type": "multipart/form-data" } }
    // );

    // Promise.allSettled(
    //   images.map(async (image) => {
    //     await axios.post(`http://localhost:${config.AWS_PORT}/api/image`, {
    //       data: { idLugar: id },
    //       image,
    //     });
    //   })
    // );
    return id;
  }
  async function update(body) {
    const place = { ...body };
    return await axios.put(URL_DB_SERVICE + `/${TABLE}`, place);
  }
  async function del(id) {
    return await axios.delete(URL_DB_SERVICE + `/${TABLE}/${id}`);
  }
  return { list, get, update, insert, del };
}
