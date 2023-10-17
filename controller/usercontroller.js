var user = require('../model/usermodel');


exports.insert = async (req,res) => {
    
    //var data = await user.create(req.body);

    var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'languagepdf@gmail.com',
    pass: 'opptpolqhapofibe'
  }
});

var mailOptions = {
  from: 'languagepdf@gmail.com',
  to: req.body.email,
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

    res.status(200).json({
        data
    })
}