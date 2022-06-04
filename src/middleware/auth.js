import { response } from "express";
import {verify} from "jsonwebtoken";




export default async(req,res,next)=>{
  const authHeader = req.headers.authorization;
  if(!authHeader){
    return res.status(401).json({message: 'User not authorizated!'});
  }

  const [,token]= authHeader.split(' ');

  try {
    const decoded = verify(token, "b4c72faccfdcaa2d4d0cff6cefaa5bd3");
    return next();
  } catch (err) {
    response.status(401).json({message:'Invalid JWT Token'})
  }
}