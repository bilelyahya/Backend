const mongoose = require ("mongoose");
const config = require ("config");
const Db = config.get("basedonnees")
const connectDB = async () => {
try {
 await  mongoose.connect(Db)
 console.log("DataBase is connected");
} catch (error) {
    console.log(error)
}
}
module.exports=connectDB;