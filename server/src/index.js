const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRouter = require("./routers/user-router");
const authRouter = require("./routers/auth-router");
const notesRouter = require("./routers/notes-router");
const app = express();

app.use(express.json());
app.use(cors());

const { auth } = require("./middlewares/auth.middlewars");

require("dotenv").config();
require("./db");

// app.get("/", (req, res) => {
//   res.send("Jai shree ram");
// });

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/notes", auth, notesRouter);

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
