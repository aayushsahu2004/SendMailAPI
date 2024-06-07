const { sendSubcribeMail } = require("../utils/nodeMailer");

exports.subscribeSendMail = async function (req, res, next) {
    try {
        sendSubcribeMail(req.body.email)
        res.status(200).json({ message: "Subscribe Successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};