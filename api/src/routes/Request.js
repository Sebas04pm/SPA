const { Router } = require("express");
const router = Router();
const Request = require("../controllers/request");

//registrarse
router.post("/Create", Request.createRequest);

// encontrar usuario
router.post("/", Request.findRequest);

module.exports = router;
