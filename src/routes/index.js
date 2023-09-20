const { Router, request, response } = require("express");
const { welcome } = require("../controllers/index");
const router = Router();

router.get("/",welcome);

module.exports = router;