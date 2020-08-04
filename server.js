const express = require('express')
const app = express()
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const server = http.createServer(app);
const port = 3000
const { Router } = require('./server/router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());
app.use('/api', Router);

server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

