
const multer = require("multer")
const path = require("path")
const { v4: uuid } = require("uuid")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads")
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        const { v4: uuid } = require("uuid")
        const fn = uuid() + ext
        req.body.profile = `uploads/${fn}`
        cb(null, fn)
    },
})

module.exports = multer({ storage })