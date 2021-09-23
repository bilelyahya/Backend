const loger = (req,res,next)=>{
console.table({methode:req.methode,path:req.url})
next();
};
module.exports=loger