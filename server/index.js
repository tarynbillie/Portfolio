const express = require('express'),
app = express(),
dotenv = require('dotenv'),
cors = require('cors');

dotenv.config(); 

app.use(cors());

const PORT = process.env.PORT;



app.post('/contact', (req, res) => {
    const msg = {
        to: emails,
        from: 'farmr@farmer.io',
        subject: 'We found your future farmer!',
        text: `Hello Chef, Farmr has found you a farmer ${farmer.username} selling what you\'re looking for. Please go to Farmr and log into your account`,
        html: `Hello Chef, Farmr has found you a farmer ${farmer.username} selling what you\'re looking for. Please go to Farmr and log into your account`,
    };
    sgMail.send(msg);
    res.status(200).send({'msg' : 'Your email has been sent!'})
})


app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`server is listening on ${PORT}...hello!`)
})
