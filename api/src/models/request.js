const mongoose = require("mongoose");
const { Schema } = mongoose;

// Request Schema
const RequestSchema = new Schema({
  nombre: {
    type: String,
  },
  apellido: {
    type: String,
  },
  correo: {
    type: String,
  },
  pais: {
    type: String,
  },
  ciudad: {
    type: String,
  },
});

const Request = mongoose.model("Request", RequestSchema);
module.exports = Request;
