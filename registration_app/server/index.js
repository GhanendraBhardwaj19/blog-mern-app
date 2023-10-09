const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const EmployeeModel = require("./models/EmployeeModel");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("password is incorrect");
      }
    } else {
      res.json("user not found");
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
