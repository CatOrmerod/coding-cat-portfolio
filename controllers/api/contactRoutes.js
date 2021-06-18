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
            to: req.body.email,
            subject: 'Thanks for getting in touch through my website',
            text: `Hey ${req.body.name}, thanks for reaching out :)`,
            html: `<b>Hey ${req.body.email}! </b><br><br>You worked ${req.body.unpaidHours} hours for a total of $${req.body.unpaidSalary}, was it worth it?<br><br> Sign our petition to end unpaid overtime.
              <br>
              <br>
               Do you know anyone else who might like using this calculator? <br>Share them this link: <a href="https://the-right-to-switch-off.herokuapp.com/">https://the-right-to-switch-off.herokuapp.com/</a><br><br> 
              Thanks,<br>
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