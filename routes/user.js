
const { Router} = require("express");

const { getUser, postUser, deleteUser, putUser } = require("../controllers/user");

const router = Router();


router.get('/', getUser);
router.put('/', putUser);
router.post('/', postUser);
router.delete('/', deleteUser);




module.exports = router;