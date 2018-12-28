const express = require('express'),
app = express(),
dotenv = require('dotenv'),
cors = require('cors');

dotenv.config(); 

app.use(cors());

const PORT = process.env.PORT;






app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`server is listening on ${PORT}...hello!`)
})
