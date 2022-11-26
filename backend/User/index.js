import express from "express";
import config from "../config.js";
// import user from "./Components/Usuario/usuario.network.js";
// import auth from "./Components/Auth/auth.network.js";
// import errors from "./network/errors.js";
const port = config.PORT;
const app = express();
app.use(express.json());

//Router
// app.use("/api/user", user);
// app.use("/api/auth",auth);

// app.use(errors);
app.listen(port, () => console.log("listening on port", port));
