const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const aiAgent = require('./aiAgent');
require('./db');

const app = express();
app.use(bodyParser.json());
app.use(cors());


// API Endpoint
app.post('/command', async (req, res) => {
    const { command } = req.body;
    if(!command) {
        return res.status(400).json({ error: 'Command is required.' });
    }
    const response = await aiAgent(command);
    res.json({ response });
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});