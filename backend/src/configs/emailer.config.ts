import nodemailer from "nodemailer";
import ServerConfig from "./server.config";

const Emails = {
  From: ServerConfig.EMAIL_FROM,
  To: ServerConfig.EMAIL_TO,
};

const transporter = nodemailer.createTransport({
  secure: true,
  port: ServerConfig.SMTP_PORT,
  host: ServerConfig.SMTP_HOST,
  auth: {
    user: ServerConfig.SMTP_USER,
    pass: ServerConfig.SMTP_PSWD,
  },
});

const Emailer = { Emails, transporter };
export default Emailer;
