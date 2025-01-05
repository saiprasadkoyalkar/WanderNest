import jwt from "jsonwebtoken"
export const verifyUser = (req,res,next)=>{
    let token = req.headers.authorization;
    if(token)
    {
        token = token.split(" ")[1];
        jwt.verify(token, process.env.ACESSTOKEN_SECRET_KEY, (err, user)=>{
            if(err)
            {
                res.status(403).json({message: "Wrong Token"});
            }
            req.user=user;
            //res.status(200).json({name: user});
            next();
        })
    }
}



// if(autho tab > bear > remain istha)
//     {
//       req.headerse.authorisation isthav;
//       so, bear + remain untadi [split vadthav]
//     }
//     else if(headers tab > auth : Bearer remain)
//     {
//         req.header.autho ; (this has Bearer remain)
//         [split vadthav]
        
//     }
     