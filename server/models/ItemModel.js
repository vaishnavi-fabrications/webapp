const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    img:{
        type:String,
        required:[true,'img url is required']
    },
    category:{
        type:String,
        required:[true,'category is required ']
    },
});

module.exports = mongoose.model('items',itemSchema);