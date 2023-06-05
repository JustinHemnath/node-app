import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { connectDB } from "./src/db/mongodb.js";
import usersRoute from "./src/routes/users.js";
import chatRoute from "./src/routes/chat.js";

dotenv.config();

const app = express();
const port = process.env.port || 8001;

app.use(
  cors({
    origin: ["http://localhost:8000"],
  })
);

app.use(express.json());

app.use("/", usersRoute);
app.use("/message", chatRoute);

(async function startServer() {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log("Server up and running");
    });
  } catch (err) {
    console.log("NOT CONNECTED TO SERVER");
  }
})();
