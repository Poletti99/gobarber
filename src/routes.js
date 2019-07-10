import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Victor Poletti',
    email: 'victor@gotmail.com',
    password_hash: 'akljdfhkajlsfhld',
  });
  return res.json(user);
});

export default routes;
