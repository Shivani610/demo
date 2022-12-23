const { getAllRegisteredUser, registerUser, login, distroyUsers } = require("../controllers/userController")
const { log } = require("../middleware/logger")
const { loginOnly } = require("../middleware/loginOnly")
const upload = require("./../middleware/upload")
const router = require("express").Router()
router
    .get("/", loginOnly, getAllRegisteredUser)
    .post("/signup", log, upload.single("avatar"), registerUser)
    .post("/login", login)
    .delete("/destroy", loginOnly, distroyUsers)

module.exports = router