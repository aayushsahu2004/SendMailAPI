require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const cors = require("cors");


// Logger
const logger = require("morgan");
app.use(logger("tiny"));


// CORS configuration
const corsOption = {
    origin:[process.env.ACCESS_ORIGIN],
    credentials:true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOption));

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// All Routes 
app.use("/send-Mail/", require("./routes/sendMailRoutes"));


app.listen(process.env.PORT, console.log(`Server ruuning on port ${process.env.PORT}`));