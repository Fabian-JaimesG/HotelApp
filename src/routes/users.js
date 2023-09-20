const { Router} = require("express");
const { getUsers, postUsers, getUsersById, getUsersByTaxID, deleteUser } = require("../controllers/Users");

const router = Router();
 
router.get("/",getUsers);
router.get("/id/:id",getUsersById);
router.get("/taxid/:taxid",getUsersByTaxID);
router.post("/",postUsers);
router.delete("/:id",deleteUser);

module.exports = router;