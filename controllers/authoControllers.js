const User = require("../models/User");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const register = async (req, re) => {
  const { name, lastname, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    //check if user exist
    if (user) {
      return res.status(400).json([{ msg: "user is already exist" }]);
    }
    //create user
    user = new User({ name, lastname, email, password });

    //cryptage password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    //save user
    await user.save();

    //login user(token)
    const payload = {
      userID: user._id,
    };

    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });

    //response
    res.send({
      token,
      user: {
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        _id: user._id,
      },
    });
    res.send({ user });


    res.send({ user: { name, lastname, email, password } });
  } catch (error) {
    console.log(error);
  }
};

const login = async(req,res) => {
const { email,password } = req.body
try {
    //check if user exist
    let user = await User.findOne({email});
    if (user){
       return res.status(400).json([{ msg: "bas credential (mail)" }])
    }

    //compare password
const ismatch = await bcrypt.compare(password,user.password);
if (ismatch){
    return res.status(400).json([{ msg: "bas credential (password)" }])

}
    //sign user(token)
    const payload = {
        userID : user._id,
    };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });

    //response
    res.send({
        token,
        user: {
          name: user.name,
          lastname: user.lastname,
          email: user.email,
          _id: user._id,
        },
      });

} catch (error) {
    console.log(error)
}
}
const getAuthUser =(req,res)=>{
res.send({user:req.user})
}

module.exports = {
  register,login,getAuthUser
};
