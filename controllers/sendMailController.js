const { sendSubcribeMail } = require("../utils/nodeMailer");

exports.homePage = async function (req, res, next) {
    try {
        res.json({ message: "Welcome to Homepage!" })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.subscribeSendMail = async function (req, res, next) {
    try {
        sendSubcribeMail(req.body.email)
        res.status(200).json({ message: "Subscribe Successfully!", email: req.body.email});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};