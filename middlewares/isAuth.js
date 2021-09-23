const User=require('../models/User');
var jwt = require("jsonwebtoken");

const isAuth=async (req,res,next)=>{

  const token=req.headers.authorization;
  var decoded = jwt.verify(token,process.env.SECRET);
  try {
      const user =await user.findById(decoded.userID).select('-password')
    if (user){
        return res.status(401).json([{msg:"non authorisé"}]);
    req.user=user;
    next();
    }
    } catch (error) {
      console.log(error)
  }
next();
}

module.exports=isAuth;