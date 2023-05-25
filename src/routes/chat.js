import express from "express";
import chatModel from "../model/chatModel";

const router = express.Router();

router.route("/sendmessage").post(async (req, res) => {
  const message = req.body.message;

  await chatModel.create(message);

  res.status(200).json("Message sent");
});

export default router;
