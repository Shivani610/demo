const mongoose = require("mongoose")
const db = () => {
    try {
        mongoose.set("strictQuery", true)
        mongoose.connect(process.env.MONGO_URL)
        console.log("db Connected");
    } catch (error) {
        console.log(error);
    }
}
module.exports = db