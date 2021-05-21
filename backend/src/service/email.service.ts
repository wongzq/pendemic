import Emailer from "../configs/emailer.config";

const from = Emailer.Emails.From;
const to = Emailer.Emails.To;

const EmailService = {
  example: async () => {
    try {
      const subject = `Example Title`;
      const text = `Example Text`;
      const mailOptions = { from, to, subject, text };
      await Emailer.transporter.sendMail(mailOptions);
    } catch (err) {
      global.logger.error(err);
    }
  },
};

export default EmailService;
