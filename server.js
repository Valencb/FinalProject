const express= require('express');
const mongoose= require('mongoose')
const bodyParser= require('body-parser')
const config = require('./server/api/db');
const app = express();

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

app.use(bodyParser.urlencoded({extend:true
}))


app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes',(req, res)=>{
    console.log(req.body)
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});