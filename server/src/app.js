import express from "express";
import bodyParser from "body-parser";
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));

app.get('/status', (req, res)=>{
    res.send({
        message: "hello World"
    })
})


app.listen(port, (req, res)=>{
    console.log(`Listening to port ${port}...`)
})