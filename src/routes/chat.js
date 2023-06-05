import express from "express";
import chatModel from "../model/chatModel.js";

const router = express.Router();

router.route("/sendmessage").post(async (req, res) => {
  const message = req.body.message;

  await chatModel.create({ message: message });
  const listOfMessages = await chatModel.find({});

  res.status(200).json(listOfMessages);
});

router.route("/getMessages").get(async (req, res) => {
  const listOfMessages = await chatModel.find({});
  res.status(200).json(listOfMessages);
});

export default router;
