import { sign } from 'jsonwebtoken';
import User from '../schemas/User';
import { compare } from 'bcryptjs';

class SessionController {
  async create(req, res) {
    const { username, password } = req.body;

    const user = await User.findOne({
      username
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found!' });
    }
    const matchPassword = await compare(password, user.password);
    
    if (!matchPassword) {
      return res.status(404).json({ error: 'Incorret password or username!' });
    }

    const token = sign({}, 'b4c72faccfdcaa2d4d0cff6cefaa5bd3', {
      subject: new String(user._id),
      expiresIn: '1d',
    });
    return res.json({
      token,
      user
    });
  }
}

export default new SessionController();
