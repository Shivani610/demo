exports.log = (req, res, next) => {
    console.log(`method ${req.method} on ${new Date().toLocaleString()}`)
    next()
}