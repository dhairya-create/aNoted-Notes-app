require("dotenv").config();

//package
const express = require("express");
const cors = require("cors");
//const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DataBase Connected...");
  })
  .catch((err) => {
    console.log(err);
});

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.get("/",(req,res)=>{
  res.json("Testing Route...");
})

const userRouter = require('./app/routes/user');
app.use('/users',userRouter);

const notesRouter = require('./app/routes/notes');
app.use('/notes',notesRouter);

const toDoRouter = require('./app/routes/toDo');
app.use('/toDo',toDoRouter);

const diaryRouter = require('./app/routes/diary');
app.use('/diary',diaryRouter);

app.listen(port,()=>{
    console.log(`Server is running on port:${port}`);
});

