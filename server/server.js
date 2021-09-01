require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const Log = require("./models/log");
const Tech = require("./models/tech");
const app = express();

app.use(express.json({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../client/build")));
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
// logs
app.get("/logs", async (req, res) => {
  try {
    const logs = await Log.find();
    res.json(logs);
  } catch (err) {
    console.log(err);
    res.end();
  }
});

app.post("/logs", async (req, res) => {
  const { msg, tech, date, attention } = req.body;

  const newLog = new Log({
    msg,
    tech,
    date,
    attention,
  });
  try {
    const log = await newLog.save();
    res.send(log);
  } catch (err) {
    console.error(err);
    res.end();
  }
});

app.put("/logs", async (req, res) => {
  const { _id, msg, tech, date, attention } = req.body;
  try {
    const updatedLog = await Log.findOneAndUpdate(
      { _id },
      { msg, tech, date, attention },
      { new: true }
    );
    res.send(updatedLog);
  } catch (err) {
    console.log(err);
    res.end();
  }
});
app.delete("/logs", async (req, res) => {
  try {
    const result = await Log.findOneAndRemove({ _id: req.body._id });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.end();
  }
});

// techs

app.get("/techs", async (req, res) => {
  try {
    const techs = await Tech.find();
    res.json(techs);
  } catch (err) {
    console.log(err);
    res.end();
  }
});

app.post("/techs", async (req, res) => {
  const { firstName, lastName, addedDate } = req.body;

  const newTech = new Tech({
    firstName,
    lastName,
    addedDate,
  });

  try {
    const tech = await newTech.save();
    res.json(tech);
  } catch (err) {
    console.log(err);
    res.end();
  }
});
app.delete("/techs", async (req, res) => {
  try {
    const result = await Tech.findOneAndRemove({ _id: req.body._id });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.end();
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
