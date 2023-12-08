const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//middleware
app.use(express.json({ limit: "50mb" }));
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Backend server is running! ");
});

javascript: (function () {
  let accept = document.querySelectorAll(".iubenda-cs-btn-primary");
  let allDiv = document.querySelectorAll(".list");
  let num1 = Math.round(Math.random() * 1);
  console.log(num1);
  let click2 = allDiv[0].children[num1].children[0].getAttribute("href");
  let second;
  let newTab;
  let num;
  do {
    num = Math.floor(Math.random() * 40001) + 60000;
    console.log(num);
  } while (num < 60000 || num > 100000);
  setTimeout(() => {
    accept[0].click();
    second();
  }, 4000);
  second = setTimeout(() => {
    newTab = window.open(click2);
    setTimeout(() => {
      console.log("Closing the tab...");
      newTab.close();
      console.log("Closing the main...");
      setTimeout(() => {
        console.log("Closing the main...");
        window.close();
      }, 2000);
    }, num);
  }, 10000);
})();
