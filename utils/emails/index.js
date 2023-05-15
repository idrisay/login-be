const nodemailer = require("nodemailer");
const configs = require("../../configs");

let transporter = nodemailer.createTransport({
    host: configs.mailHost,
    port: configs.mailPort,
    auth: {
      user: configs.mailAuthUser,
      pass: configs.mailAuthPass,
    },
  });

module.exports = transporter