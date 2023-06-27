const { Router } = require("express");

const requestRoute = require("./Request");

const router = Router();

router.use("/Request", requestRoute);

module.exports = router;
