const express = require("express");
const { subscribeSendMail, homePage } = require("../controllers/sendMailController");
const router = express.Router();


// Send Subscribe Mail

router.get("/", homePage)

router.post('/subscribe-send-mail', subscribeSendMail)

module.exports = router;