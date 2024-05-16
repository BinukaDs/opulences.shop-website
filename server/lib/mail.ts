export default async function sendMail({
  to,
  name,
  subject,
  body,
}: {
  to: string;
  name: string;
  subject: string;
  body: string;
}) {

    const {SMTP_EMAIL, SMTP_PASSWORD} = process.env;
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD
        }
    });

    try {
        const testResult = await transporter.verify();
        console.log('Connected to email server', testResult);
    } catch(err) {
        console.error(err);
    }

    try {
        const sendResult = await transporter.sendMail({
            from: SMTP_EMAIL,
            to,
            subject,
            html: body
        });
        console.log('Email sent', sendResult);
    } catch (err) {
        console.error(err);
    }
}
