import express from "express";
import image from "./components/image.network.js";
import config from "../config.js";
import errors from "../network/errors.js";
import multer from "multer";
import cors from "cors";

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.json());
app.use(cors());

// ROUTER
// app.use("/api/image", image);
app.post("/image", upload.single("image"), (req, res) => {
  const file = req.file;
  console.log(file);
});
app.use(errors);

app.listen(config.AWS_PORT, () => {
  console.log("Place Service listening on port ", config.AWS_PORT);
});
