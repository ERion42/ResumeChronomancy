const mongoose = require('mongoose');
const { modelName } = require('../models/Profile');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/resumeChronomancy',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true, 
        useFindAndModify: false,
    }
);
module.exports = mongoose.connection;