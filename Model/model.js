const mongoose = require('mongoose')
const urlShema = mongoose.Schema({
    orgId:{
        type: String,
        required: true,
    },
    shortId:{
        type: String,
        required: true,
        unique:true
    },
    click:{
        type:Number,
        default: 0
    }
})
module.exports= mongoose.model('urls', urlShema);