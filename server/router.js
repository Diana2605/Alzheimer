const Router = require('express').Router();
const Interaction = require('./interaction');

Router.post('/interaction', async (req, res) => {
    try {
        return res.json(await Interaction.callWatsonAssistant(req.body));
    } catch (error) {
        return res.status(500).json({
            errorCode: 500,
            errorMessage: 'Error in calling Watson Assistant'
        });
    }
})

module.exports = {Router: Router};