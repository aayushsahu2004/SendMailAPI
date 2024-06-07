require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();


// Logger
const logger = require("morgan");
app.use(logger("tiny"));


// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// All Routes 
app.use("/send-Mail/", require("./routes/sendMailRoutes"));


app.listen(process.env.PORT, console.log(`Server ruuning on port ${process.env.PORT}`));