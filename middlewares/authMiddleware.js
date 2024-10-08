const JWT=require('jsonwebtoken');



module.exports=async(req,res,next)=>{
    try {
        const token =
          req.cookies.token;
    
        //if token missing, then return response
        if (!token) {
          return res.status(401).json({
            success: false,
            message: "Token is missing",
          });
        }
    
        //verify the token
        try {
          const decode = JWT.verify(token, process.env.JWT_SECRET);
          req.user = decode;
        } 
        catch (err) {
          //verification - issue
          return res.status(401).json({
            success: false,
            message: "token is invalid",
          });
        }
        next();
      } catch (error) {
        return res.status(401).json({
          success: false,
          message: "Something went wrong while validating the token",
        });
      }
}