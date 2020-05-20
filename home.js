let express = require('express');
let router = express.Router();
let nodemailer = require('nodemailer');
let cors = require('cors');
const creds = require('./config');
 
let transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: creds.USER,
        pass: creds.PASS,
    }
}

let transporter = nodemailer.createTransport(transport) 

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    }else {
        console.log('Server is ready to make messages');
    }
});

router.post('/send', (req, res, next) => {
    let name = req.body.name 
    let email = req.body.email 
    let phone = req.body.phone
    let subject = req.body.subject 
    let message = req.body.message 
    let content = `name: ${name} \n email: ${email} \n phone: ${phone} \n subject: ${subject} \n message: ${message}`

    var mail = {
        from: name,
        to: 'akorir233@gmail.com',
        subject: 'New Message from Contact Form',
        text: content
    }

    transporter.sendMail(mail, (err, date) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        }else {
            res.json({
                status: 'success'
            })
        }
    })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3000)


