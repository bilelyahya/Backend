const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
const authoRoutes=require("./routes/authoRoutes");
const loger=require("./middlewares/loger");

//middleware
app.use(express.json())
app.use("/user",authoRoutes);
app.use("/user",loger);

//connection db
connectDB();
const PORT = 5000 || process.env.PORT ;

//start server
app.listen(PORT, (Error)=>Error ? console.log("Error") : console.log("Server is running in 5000"));