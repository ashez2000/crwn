import * as userRepo from '../../../db/repo/user.repo';

async function signup(req, res) {
  const { name, email, password } = req.body;

  const user = await userRepo.findUserByEmail(email);
  if (user) {
    return res.status(422).json({ message: 'User already exists' });
  }

  const newUser = await userRepo.createUser({ name, email, password });
  res.status(201).json({ user: newUser });
}

export async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await signup(req, res);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
}
