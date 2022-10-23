"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "mymusawo2021@gmail.com",
      pass: "yyyatphsotkqndai",
    },
    secure: true,
  });

  const mailData = {
    from: req.body.email,
    to: "support@mymusawo.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
    <div
      style="
        padding: 20px 20px;
        font-size: 16px;
        background: #f1f1ff;
      "
    >
      <p style="margin: 0px; margin-top: 5px">
        <strong>Name:</strong> ${req.body.name}
      </p>
      <p style="margin: 0px; margin-top: 5px">
        <strong>Email:</strong> ${req.body.email}
      </p>
      <p style="margin: 0px; margin-top: 5px">
        <strong>Message:</strong> ${req.body.message}
      </p>
    </div>
    `,
  };

  let info = await transporter.sendMail(mailData);

  console.log("Entire Message Returned: ", info);
  console.log("Message sent: %s", info.messageId);

  if (info.response == "250 Message received") {
    res.send("success");
  } else {
    res.send("error");
  }
}

export default main;
