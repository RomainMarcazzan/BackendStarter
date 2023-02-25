import { createTransport } from 'nodemailer';

export const sendPasswordResetCode = async (email, resetCode) => {
  // create reusable transporter object using the default SMTP transport
  console.log('email', email);
  console.log('resetCode', resetCode);
  let transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  //console.log('transporter', transporter);

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Password reset code',
    text: `Your password reset code is ${code}`,
    html: `<p>Your password reset code is <strong>${code}</strong></p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
