import express from "express"
import place from "./components/place.network.js"
import config from "../config.js";
import errors from "../network/errors.js"
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
// ROUTER
app.use('/api/lugar',place);
app.use(errors);

app.listen(config.PLACE_PORT, () => {
    console.log('Place Service listening on port ', config.PLACE_PORT);
});