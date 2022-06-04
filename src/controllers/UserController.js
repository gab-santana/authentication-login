import User from "../schemas/User";
import {hash} from "bcryptjs";

class UserController {
  async create(req, res) {
    const { name, email, username, password, phone } = req.body;
    console.log(req.body);

    const passwordCrypt = await hash(password,8);
    
    const user = await User.create({
      name,
      email,
      username,
      password: passwordCrypt,
      phone, 
    });
    
    return res.json({
      name:user.name,
      email: user.email,
      username: user.username,
      phone: user.phone
    });
    /*return res.status(201).json({
      name: user.name,
      email: user.email,
      username: user.username,
      phone: user.phone
    });*/
  }
  async index(req,res){
    const users = await User.find();
    return res.json(users);
  }
  
}
export default new UserController();