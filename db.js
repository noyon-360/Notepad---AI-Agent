const mongoose = require('mongoose');
require('dotenv').config(); 

const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log(error);
})