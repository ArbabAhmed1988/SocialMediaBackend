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

const Connect =() =>{
  console.log('====================================', process.env.MONGO_URL);

  mongoose.connect(process.env.MONGO_URL)
  .then(()=>{
      console.log("Database Connected")
  })
  .catch((err)=>{
      throw err;
  })

}

//middleware
app.use(express.json({ limit: "50mb" }));
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Backend server is running! ");
  Connect();
});

