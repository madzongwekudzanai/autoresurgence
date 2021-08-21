const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const myEmail = process.env.EMAIL;
const myPassword = process.env.PASSWORD;

router.post('/', async (req, res) => {
	const output = `
          <p>You have a new contact request</p>
          <h3>Contact Details</h3>
          <ul>  
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Subject: ${req.body.phone}</li>
            <li>Subject: ${req.body.subject}</li>
          </ul>
          <h3>Message</h3>
          <p>${req.body.message}</p>
        `;

	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: myEmail,
			pass: myPassword,
		},
	});

	let mailOptions = {
		from: email,
		to: 'kudziemadzongwe6@gmail.com',
		subject: 'Contact request',
		html: output,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			res.json('Thank you, your email has been sent');
			console.log('Email sent: ' + info.response);
		}
	});
});

module.exports = router;
