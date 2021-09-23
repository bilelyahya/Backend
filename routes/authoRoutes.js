const express = require('express');
const router = express.Router();
const {register,login,getAuthUser}=require('../controllers/authoControllers');
const {registerRules,validator}=require('../middlewares/bodyValidator')
const isAuth = require('../middlewares/isAuth');
//post
//register user
//access public
router.post('/register',registerRules(),validator,register);

//post
//login user
//access public
router.post('/login',login);

//get
//get autho user
//access private
router.post('/me',isAuth,getAuthUser);




module.exports = router;