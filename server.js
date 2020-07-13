require('dotenv').config();
const port = 3000
//import interaction functionality
const Interaction = require('./interaction');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Welcome to my chatbot!'))

//interaction route
app.post('/interaction', (req, res) => {
  //here call interaction.callWatsonAssistant function
  //Interaction.callWatsonAssistant(req.body)
  Interaction.callWatsonAssistant(params, [callback()]);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
