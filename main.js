const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
const { selectUser, addUser } = require("./user");
app.use(cors());

app.get("/selectUser", async (req, res) => {
  const list = await selectUser();
  res.json(list);
});

app.post("/addUser", async (req, res) => {
  const body = req.body;
  await addUser(body);
  res.json("Iam post postman");
});

app.listen(8000, console.log("server started"));
