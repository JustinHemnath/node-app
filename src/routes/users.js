import express from 'express';
import users from '../model/usersModel.js';

const router = express.Router();

router.route('/').get((req, res) => {
  res.send('HOMEPAGE ROUTE');
});

router.route('/getusers').get(async (req, res) => {
  const userList = await users.find({});
  res.status(200).send(userList);
});

router.route('/user').post(async (req, res) => {
  if (!req.body.name) {
    res.send('THERE ARE NO USERS REGISTERED');
  } else {
    await users.create(req.body);
    const userList = await users.find({});
    res.status(200).send(userList);
  }
});

router.route('/user').delete(async (req, res) => {
  //   console.log(req.body);
  if (!req.body.name) {
    res.send('No user to delete');
  } else {
    await users.deleteOne(req.body);
    const userList = await users.find({});
    res.status(200).send(userList);
  }
});

export default router;
