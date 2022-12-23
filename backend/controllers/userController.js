const User = require("./../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.registerUser = async (req, res) => {
    try {
        console.log(req.body);
        req.body.password = bcrypt.hashSync(req.body.password)
        await User.create(req.body)
        res.json({
            message: `${req.body.name} register sucessfully`
        })
    } catch (error) {
        res.status(400).json({
            message: `adderror ${error} `
        })
    }
}
exports.getAllRegisteredUser = async (req, res) => {
    try {
        const result = await User.find()
        res.json({
            message: `All Users Fetched Successfully`,
            result
        })
    } catch (error) {
        res.status(400).json({
            message: `geterror ${error} `
        })
    }
}
exports.login = async (req, res) => {
    try {

        const { email, password } = req.body
        // const result = await User.find({email:email})
        // const result = await User.find({ email: req.body.email })
        const result = await User.findOne({ email })
        if (!result) {
            return res.status(400).json({ message: "email not found" })
        }
        const found = bcrypt.compareSync(password, result.password)
        if (!found) {
            return res.status(400).json({ message: "Password do not match " })
        }
        const token = jwt.sign({ id: result._id }, "123") //name is encrypted data  123 is password
        res.json({
            message: "login success",
            result: {
                name: result.name,
                email: result.email,
                token

            },
            token
        })
    } catch (error) {
        res.status(400).json({
            message: `geterror ${error} `
        })
    }
}

exports.distroyUsers = async (req, res) => {
    try {
        await User.deleteMany()
        res.json({
            message: "All users Deleted Successfully"
        })
    } catch (error) {
        res.status(400).json({
            message: `geterror ${error} `
        })
    }
}