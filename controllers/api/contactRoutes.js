const router = require('express').Router();
const nodemailer = require('nodemailer');
const { Contact } = require('../../models');

router.post('/', async (req, res) => {
    console.log("contact me created");
    console.log(req.body);
        const newContact = await Contact.create({
          ...req.body,
        });
        res.json({
            success: true,
            newContact
        });
        var mailOptions = {
            from: '"Cat Ormerod" <catormerod@gmail.com>',
            to: '"Cat Ormerod" <catormerod81@gmail.com>',
            subject: 'Someone wants to get in touch!',
            text: `${req.body.name}, is keen to contact you :)`,
            html: `<b>Hey Cat, you can reach out to them on ${req.body.email}! </b><br><br>They wanted to ask ${req.body.message}
            <b>Cat Ormerod</b>`,
        }; 
        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
              return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        }); 
});

var transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: 'catormerod@gmail.com',
      pass: process.env.PASS,
    },
});

module.exports = router;