import express from "express"
import route from "./components/route.network.js"
import config from "../config.js";
import errors from "../network/errors.js"

const app = express();

app.use(express.json());

// ROUTER
app.use('/api/ruta',route);
app.use(errors);

app.listen(config.ROUTE_PORT, () => {
    console.log('Route Service listening on port ', config.ROUTE_PORT);
});