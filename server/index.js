const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    return res.send('hello')
})

app.post('/signin', (req, res) => {
    console.log('post------')
    return res.send(req.body)
})

app.listen(3001, () => {
    console.log('server is running on 3001')
})