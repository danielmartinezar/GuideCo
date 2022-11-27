const TABLA = "Ruta";
import { nanoid } from "nanoid";
let store = null;
export default function controller(injectedStore) {
  injectedStore ? (store = injectedStore) : (store = db);
  function list() {
    return store.list(TABLA);
  }
  function get(id) {
    return store.get(TABLA, id);
  }
  async function upsert(body) {
    return store.upsert(TABLA, user);
  }
  return { list, get, upsert };
}