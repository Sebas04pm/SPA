const mongoose = require("mongoose");
require("dotenv").config();
// Import constants instead of accessing process.env directly
const { CONNECTION_URL, CONNECTION_URL_DEV, NODE_ENV } = process.env;

mongoose.Promise = global.Promise;

// Use an alternative db when testing so we don't pollute the original db
const CONN = NODE_ENV === "SPA_Database" ? CONNECTION_URL_DEV : CONNECTION_URL;

mongoose
  .connect("mongodb://127.0.0.1:27017/prueba?directConnection=true", { useNewUrlParser: true })
  .then(() => {
    console.log("La conexión a mongodb se realizo correctamente");
  })
  .catch((error) => console.log(`${error} did not connect`));
