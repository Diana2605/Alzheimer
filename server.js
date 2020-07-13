const express = require('express')
const app = express()
const port = 3000
//import interaction functionality
const Interaction = require('./interaction');

app.get('/', (req, res) => res.send('Welcome to my chatbot!'))

//interaction route
app.post('/interaction', (req, res) => {
  //here call interaction.callWatsonAssistant function
  //Interaction.callWatsonAssistant(req.body)
   Interaction.callWatsonAssistant(params, [callback()]);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
