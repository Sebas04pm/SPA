const { LEGAL_TCP_SOCKET_OPTIONS } = require("mongodb");
const Request = require("../models/request");
const axios = require("axios").default;
const nodemailer = require("nodemailer");
const createRequest = async (req, res) => {
  let { nombre, apellido, correo, pais, ciudad } = req.body;

  newRequest = new Request({
    nombre,
    apellido,
    correo,
    pais,
    ciudad,
  });

  let request = await Request.findOne({ correo: correo });
  // console.log(Request)
  if (request) {
    return res.status(200).json({
      message: "error",
      response: correo + ", este correo ya se encuentra registrado",
    });
  }

  try {
    let request = await newRequest.save();

    res.status(200).json({
      message: "ok", //agregado exitosamente
      request,
    });
    var message = {
      from: "paredesmorillos@uvm.edu.ve",
      to: correo,
      subject: "Gracias Sr " + nombre + apellido,
      text: "Bienvenid@ a nuestro mundo paralelo",
      html: "<p>Gracisas Por particiapar</p>",
    };
    var transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true, // true for 465, false for other ports
      logger: true,
      debug: true,
      secureConnection: false,
      auth: {
        user: "paredesmorillos@uvm.edu.ve",
        pass: "jbmxxbcejmgfdgdq",
      },
      tls: {
        rejectUnAuthorized: true,
      },
    });
    transporter.verify((err, success) => {
      if (err) console.error(err);
      else console.log("Your config is correct");
    });
    transporter.sendMail(message, (error, info) => {
      if (error) {
        console.log("Error enviando email");
        console.log(error.message);
      } else {
        console.log("Email enviado");
      }
    });
  } catch (error) {
    res.status(400).json({
      message: "error",
      request: "",
    });
  }
};

const findRequest = async (req, res) => {
  let { email, password } = req.body;

  if (email) {
    try {
      let request = await Request.findOne({ email: email });
      console.log(request);
      if (request) {
        res.status(200).json({
          message: "ok",
          request,
        });
      } else {
        res.status(404).json({
          message: "Request not Found",
          request,
        });
      }
    } catch (error) {
      res.status(404).json({
        message: "Request not Found",
        error,
      });
    }
  } else {
    res.status(404).json({
      message: "email vacio",
    });
  }
};

module.exports = {
  createRequest,
  findRequest,
};
