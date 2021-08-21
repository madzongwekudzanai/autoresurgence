const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const adminAuth = require('../../middleware/adminAuth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const myEmail = process.env.EMAIL;
const myPassword = process.env.PASSWORD;
const jwtSecret = process.env.JWT_SECRET;
const nodemailer = require('nodemailer');

const User = require('../../models/User');
const Admin = require('../../models/Admin');

// @router  GET api/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @router  GET api/auth/admin
// @desc    Test route
// @access  Public
router.get('/admin', adminAuth, async (req, res) => {
	try {
		const user = await Admin.findById(req.user.id).select('-password');
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @router  POST api/auth/admin
// @desc    Authenticate admin & get token
// @access  Public
router.post('/admin', async (req, res) => {
	const { email, password } = req.body;

	try {
		let user = await Admin.findOne({ email });

		if (!user) {
			return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
		}

		const payload = {
			user: {
				id: user.id,
			},
		};

		jwt.sign(
			payload,
			config.get('jwtSecret'),
			{ expiresIn: 360000 },
			(err, token) => {
				if (err) throw err;
				res.json({ token });
			},
		);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// @router  POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post('/', async (req, res) => {
	const { email, password } = req.body;

	try {
		let user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
		}

		const payload = {
			user: {
				id: user.id,
			},
		};

		jwt.sign(payload, jwtSecret, { expiresIn: 360000 }, (err, token) => {
			if (err) throw err;
			res.json({ token });
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// @router  POST api/auth/forgot
// @desc    User forgot password
// @access  Public
router.post('/forgot', async (req, res) => {
	const { email } = req.body;

	try {
		let user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
		}

		const payload = {
			user: {
				id: user.id,
			},
		};

		jwt.sign(payload, jwtSecret, { expiresIn: 360000 }, (err, token) => {
			if (err) throw err;
			const output = `
          <h1>Hie ${user.name},</h1>
          <h2>Password reset</h2>
          <p>Please click the link below to reset your password<p/>
          <a href="https://autoresurgence.herokuapp.com/auth/${token}">reset password</>
        `;

			let transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: email,
					pass: password,
				},
				tls: {
					rejectUnauthorized: false,
				},
			});

			let mailOptions = {
				from: 'Password reset kudziemadzongwe6@gmail.com',
				to: email,
				subject: 'Password reset',
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
			res.json('A password reset link has been sent to your email');
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// @router  POST api/auth/admin/forgot
// @desc    User forgot password
// @access  Public
router.post('/admin/forgot', async (req, res) => {
	const { email } = req.body;

	try {
		let user = await Admin.findOne({ email });

		if (!user) {
			return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
		}

		const payload = {
			user: {
				id: user.id,
			},
		};

		jwt.sign(payload, jwtSecret, { expiresIn: 360000 }, (err, token) => {
			if (err) throw err;
			const output = `
          <h1>Hie ${user.name},</h1>
          <h2>Password reset</h2>
          <p>Please click the link below to reset your password<p/>
          <a href="https://autoresurgence.herokuapp.com/admin/forgot/${token}">reset password</>
        `;

			let transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: myEmail,
					pass: myPassword,
				},
				tls: {
					rejectUnauthorized: false,
				},
			});

			let mailOptions = {
				from: 'Admin password reset kudziemadzongwe6@gmail.com',
				to: email,
				subject: 'Password reset',
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
			res.json('A password reset link has been sent to your email');
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
