import express from "express"
import route from "./components/route.network.js"
import config from "../config.js";
import errors from "../network/errors.js"
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

// ROUTER
app.use('/api/ruta',route);
app.use(errors);

app.listen(config.ROUTE_PORT, () => {
    console.log('Route Service listening on port ', config.ROUTE_PORT);
});