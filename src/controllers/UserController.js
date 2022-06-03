import User from "../schemas/User";
import {hash} from "bcryptjs";

class UserController {

  async create(req, res) {
    const { name, email, username, password, phone } = req.body;
    const passwordCrypt = hash(password,10,function(err, hash){});
    
    const user = await User.create({
      name,
      email,
      username,
      password: passwordCrypt,
      phone,
    });
    
    return res.json(user);
  }
  
}
export default new UserController();