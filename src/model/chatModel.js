import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  message: String,
});

const chatModel = mongoose.model("Chat", chatSchema, "Chat");

export default chatModel;
