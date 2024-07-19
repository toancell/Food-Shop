const nodemailer = require("nodemailer");
const sendMail = async ( email, html ) =>{
    

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.MAIL_NAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper

  let info = await transporter.sendMail({
    from: '"Food Shop" <toancell6789@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Forgot Password", // Subject line
    
    html: html, // html body
  });

  


 return info;

}
module.exports = sendMail;