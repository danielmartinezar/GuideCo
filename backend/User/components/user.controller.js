const TABLA = "usuarios";
import { nanoid } from "nanoid";
import auth from "../Auth/index.js";
import db from "../../Store/mysql.js";
let store = null;
export default function (injectedStore) {
  injectedStore ? (store = injectedStore) : (store = db);
  function list(tabla) {
    return store.list(TABLA);
  }
  function get(id) {
    return store.get(TABLA, id);
  }
  async function upsert(body) {
    const user = {
      ID: nanoid(),
      NAME: body.name,
      USERNAME: body.username,
      SURNAMES: body.surnames,
    };
    const password = body.password;
    const authData = { ...user, password };
    await auth.upsert(authData);
    return store.upsert(TABLA, user);
  }
  return { list, get, upsert };
}
