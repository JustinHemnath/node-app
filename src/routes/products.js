import express from 'express';
import users from '../model/users.js';

const router = express.Router();

router.route('/').get((req, res) => {
  res.send('HOMEPAGE ROUTE');
});

router.route('/newuser').post(async (req, res) => {
  if (!req.body.name) {
    res.send('THERE ARE NO USERS REGISTERED');
  } else {
    // const user = new users(req.body);
    // await user.save();
    const user = await users.create(req.body);
    console.log(user);
    res.status(400).send(user);
  }
});

export default router;
