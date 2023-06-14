import response from "../../network/response.js";
import { Router } from "express";
import controller from "./imageComp.index.js";
import multer from "multer";

const upload = multer({ dest: 'uploads/' })
const router = Router();

//Routes
router.get("/:id", get);
router.put("/", update);
router.delete("/:id", del);

router.post("/",upload.single('image'),(req,res)=>{
  console.log(req.file);
});


//
function list(req, res, next) {
  controller
    .list()
    .then((resp) => {
      response.success(req, res, resp.data.body, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}
function get(req, res, next) {
  controller
    .get(req.params.id)
    .then((resp) => {
      response.success(req, res, resp.data.body, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}
async function insert(req, res, next) {
  console.log(req.body.file);
  controller
    .insert(req.body.data, req.file)
    .then((resp) => {
      console.log(resp.data);
      response.success(req, res, resp.data.body, 201);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
      console.error(err);
    });
}
function update(req, res, next) {
  controller
    .update(req.body)
    .then((resp) => {
      response.success(req, res, resp.data.body, 201);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}
function del(req, res, next) {
  controller
    .del(req.params.id)
    .then((resp) => {
      response.success(req, res, resp.data.body, 201);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}
export default router;
