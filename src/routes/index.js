const express = require('express');
const exampleRoutes = require("./example")

const router = express.Router();

router.use(exampleRoutes)

module.exports = router