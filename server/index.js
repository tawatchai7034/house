const express = require("express");
const mongoose = require("mongoose");
const { config } = require("./config/config");
const userRouter = require("./routes/User");
const app = express();
const { ObjectId } = require("mongodb");

// Connect to MongoDB
mongoose
  .connect(config.database.uri, config.database.options)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(err));

const db = mongoose.connection;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/user/:id", async (req, res) => {
  const userId = req.params.id;
  const user = await db
    .collection("users")
    .findOne({ _id: new ObjectId(userId) });
  if (user) {
    user._id = user._id.toString();
  }
  res.json(user);
});
// Start server
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server started on port ${port}`));
