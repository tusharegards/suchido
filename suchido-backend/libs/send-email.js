import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// sgMail.setDataResidency('eu');
// uncomment the above line if you are sending mail using a regional EU subuser
export const sendEmail = async (to, subject, html) => {
  const msg = {
    to, // Change to your recipient
    from: `Suchido <tushardews@gmail.com>`, // Change to your verified sender
    subject,
    html,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};


