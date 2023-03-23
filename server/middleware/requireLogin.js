module.exports = (req,res,next)=>{
    const {authorization} = req.header()
    if(!authorization)
    return res.status(401).json({error:"You must be log in "})
    authorization.replace("Bearer ","")
}