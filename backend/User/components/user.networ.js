import response from "../../network/response.js";
import { Router } from "express";
import controller from "./index.js";
import secure from "./usuario.secure.js";

const router = Router();

//Routes
router.get("/", list);
router.get("/:id", get);
router.post("/", upsert);
router.put("/", secure("update").middleware,upsert);

//Internal functions
function list(req, res,next) {
  controller
    .list()
    .then((lista) => {
      response.success(req, res, lista, 200);
    })
    .catch((next) => {
      response.error(req, res, err.message, 500);
    });
}
function get(req, res,next) {
  controller
    .get(req.params.id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((next) => {
      response.error(req, res, err.message, 500);
    });
}
function upsert(req, res,next) {
  controller
    .upsert(req.body)
    .then((user) => {
      response.success(req, res, user, 201);
    })
    .catch((next) => {
      response.error(req, res, err.message, 500);
    });
}
export default router;
