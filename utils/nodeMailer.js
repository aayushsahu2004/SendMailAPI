const nodeMailer = require("nodemailer");

exports.sendSubcribeMail = (email) => {
    const transport = nodeMailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        secure: true,
        port: 465,
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD
        }
    });
    const mailOptionsUser = {
        from: "Medhya Technologies <no-replymedhyatechno@gmail.com>",
        to: email,
        subject: "Welcome to Medhya Technologies!",
        html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #ffffff;">
        <div style="text-align: center; padding-bottom: 20px;">
            <img src="https://yourcompanylogo.com/logo.png" alt="Medhya Technologies" style="max-width: 150px;"/>
        </div>
        <h1 style="color: #FF4D00; text-align: center;">Welcome to Medhya Technologies!</h1>
        <p style="font-size: 14px; color: #555555;">Dear Subscriber,</p>
        <p style="font-size: 14px; color: #555555;">Thank you for subscribing to Medhya Technologies! We are thrilled to have you as part of our community.</p>
        <p style="font-size: 14px; color: #555555;">
            At Medhya, we are committed to providing you with the latest updates, cutting-edge technology insights, and exclusive offers. Your subscription ensures you will be among the first to know about our newest products, special promotions, and innovative solutions designed to meet your needs.
        </p>
        <p style="font-size: 14px; color: #555555;">Here’s what you can expect as a subscriber:</p>
        <ul style="font-size: 14px; color: #555555; line-height: 1.6;">
            <li><strong>Regular Updates:</strong> Stay informed with our newsletters featuring the latest industry trends and company news.</li>
            <li><strong>Exclusive Offers:</strong> Enjoy special discounts and promotions available only to our subscribers.</li>
            <li><strong>Innovative Solutions:</strong> Be the first to learn about our newest products and technological advancements.</li>
        </ul>
        <p style="font-size: 14px; color: #555555;">
            To make the most of your subscription, be sure to add our email address to your contacts to prevent our updates from going to your spam folder. If you have any questions or need assistance, please don’t hesitate to reach out to our customer support team at <a href="mailto:medhyatechno@gmail.com" style="color: #007bff; text-decoration: none;">medhyatechno@gmail.com</a> or call us at <a href="tel:+91-6265238702" style="color: #007bff; text-decoration: none;">+91-6265238702</a>.
        </p>
        <p style="font-size: 14px; color: #555555;">
            Thank you once again for subscribing. We look forward to connecting with you and providing valuable information and services.
        </p>
        <p style="font-size: 14px; color: #555555;">
            Best regards,<br/>
            Customer Relations Team<br/>
            Medhya Technologies
        </p>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
        <p style="font-size: 12px; color: #aaaaaa; text-align: center;">
            If you wish to unsubscribe at any time, please click <a href="https://medhyatech.com/unsubscribe" style="color: #007bff; text-decoration: none;">here</a>.
        </p>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
        <p style="font-size: 14px; color: #555555; text-align: center;"><strong>Follow us on social media:</strong></p>
        <div style="text-align: center; margin: 20px 0;">
            <a href="https://facebook.com/medhyatech" style="margin: 0 10px; text-decoration: none;"><img src="https://simpleicons.org/icons/facebook.svg" alt="Facebook" style="width: 30px;"/></a>
            <a href="https://twitter.com/medhyatech" style="margin: 0 10px; text-decoration: none;"><img src="https://simpleicons.org/icons/twitter.svg" alt="Twitter" style="width: 30px;"/></a>
            <a href="https://instagram.com/medhyatech" style="margin: 0 10px; text-decoration: none;"><img src="https://simpleicons.org/icons/instagram.svg" alt="Instagram" style="width: 30px;"/></a>
            <a href="https://linkedin.com/company/medhyatech" style="margin: 0 10px; text-decoration: none;"><img src="https://simpleicons.org/icons/linkedin.svg" alt="LinkedIn" style="width: 30px;"/></a>
        </div>
    </div>`
    };

    const mailOptionsTeam = {
        from: "Medhya Technologies <no-replymedhyatechno@gmail.com>",
        to: process.env.EMAIL_ADDRESS,
        subject: "New Subscriber Details",
        html: `<div style="max-width: 600px; margin: 20px auto; background-color: #fff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
        <div style="text-align: center; padding: 20px; background-color: #FF4D00; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            <h1 style="color: #fff;">New User Subscription Notification</h1>
        </div>
        <div style="padding: 20px; color: #666;">
            <p>Hi Team,</p>
            <p>We have a new subscriber! Below are the details of the individual who has recently subscribed to our services:</p>
            <div style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                <p><strong>User Email:</strong> ${email}</p>
                <!-- Add more user data fields as needed -->
            </div>
            <p>Please ensure that this information is added to our subscriber database and that the user is included in our upcoming communications and marketing campaigns.</p>
            <p>If there are any specific follow-up actions required based on the user's message, please address them accordingly.</p>
        </div>
        <div style="border-top: 1px solid #ccc; padding: 20px; text-align: center; color: #666; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
            <p style="font-weight: bold;">Best regards,<br>Medhya Technologies Team</p>
        </div>
    </div>`
    }

    try {
        transport.sendMail(mailOptionsUser, (err, info) => {
            if (err) {
                return console.log(err);
            }
            transport.sendMail(mailOptionsTeam)
            return res.stutas(200).json({
                message: "Mail Send Successfully! "
            });
        });
    } catch (error) {
        res.status(500).json('Error sending email', error);
    }
}