import express from "express";
import users from "../model/usersModel.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("HOMEPAGE ROUTE");
});

router.route("/getusers").get(async (req, res) => {
  const userList = await users.find({});
  res.status(200).send({ userList });
});

router.route("/user").post(async (req, res) => {
  if (!req.body.name) {
    res.send("THERE ARE NO USERS REGISTERED");
  } else {
    const accessToken = jwt.sign({ id: req.body.name }, "secretKey");

    console.log(accessToken);

    await users.create(req.body);
    const userList = await users.find({});
    res.status(200).send({ userList, accessToken });
  }
});

router.route("/user").delete(async (req, res) => {
  if (!req.body.name) {
    res.send("No user to delete");
  } else {
    await users.deleteOne(req.body);
    const userList = await users.find({});
    res.status(200).send({ userList });
  }
});

export default router;
