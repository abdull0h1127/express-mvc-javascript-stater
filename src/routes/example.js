const express = require("express")
const isLoggedIn = require("../shared/middlewares/is-logged-in");
const hasRole = require("../shared/middlewares/has-role");
const validate = require("../shared/middlewares/validate");
const { createExample } = require("../controllers/example");


const router = express.Router();

router.get("/example/create", createExample)

module.exports = router