const express = require("express");
const { subscribeSendMail } = require("../controllers/sendMailController");
const router = express.Router();


// Send Subscribe Mail
router.post('/subscribe-send-mail', subscribeSendMail)

module.exports = router;