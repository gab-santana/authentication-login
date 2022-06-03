import User from "../schemas/User";
import {hash} from "bcryptjs";

class UserController {

  async create(req, res) {
    const { name, email, username, password, phone } = req.body;
    const passwordCrypt = await hash(password,10);
    console.log(passwordCrypt);
    
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