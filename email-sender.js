var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wa1eaddraa@gmail.com',
    pass: '************'
  }
});

var mailOptions = {
  from: 'wa1eaddraa@gmail.com',
  to: 'waliddraa2@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});