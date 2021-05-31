// import
import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';

import Cards from './dbCards.js';

// app config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:admin@cluster0.vgfp1.mongodb.net/tinderdb?retryWrites=true&w=majority`
// middleware
app.use(express.json())
app.use(Cors());

// db config
mongoose.connect(connection_url, {
    useNewUrlParse: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// APi EndPoints
app.get('/', (req, res) => {
    res.status(200).send("Hello World")
})

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

// listen
app.listen(port,()=>console.log(`listen on local host ${port}`))