import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: String,
});

const users = mongoose.model("User", usersSchema, "User");

export default users;
