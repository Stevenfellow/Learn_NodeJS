

var nodemailer = require('nodemailer');

 var transporter = nodemailer.createTransport({
    service: 'gmail',
    host:'smtp.gmail.com',
    Auth: {
user: 'stevenafellow123@gmail.com.com',
pass: 'stevenah'
    }
 });

 var mailOptions = {
    from: 'stevenfellow123@gmail.com',
    to:   'stevenajuna@gmail.com',
    subject: 'Am learning node js Bro, Soon becoming a pro',
    text:    'Bro come and we do coding, am really enjoying it man.... Kabooooom',
 };

 transporter.sendMail(mailOptions, function(error, info) {
    if(error){
        console.log(error)
    } else{
        console.log('Your email is sent', +info.response)
    }
 });  