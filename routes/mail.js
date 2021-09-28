const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
    const { name, msg, email, mno } = req.body;

    const output = `<ul>
        <li>Name: ${name}</li>
        <li>Mobile Number: ${mno}</li>
        <li>email: ${email}</li>
        <li>Message: ${msg}</li>
    </ul>`;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "screamislovee@gmail.com",
            pass: "vivektheking..",
        },
    });

    let info = await transporter.sendMail({
        from: "screamislovee@gmail.com",
        to: "info@redpositive.in",
        subject: "Form Details",
        text: "vivek",
        html: output,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return res.status(200).json({ msg: "Send! Thank you for you message." });
});

module.exports = router;
