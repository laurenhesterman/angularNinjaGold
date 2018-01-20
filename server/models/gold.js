var mongoose = require('mongoose');
// create the schema
var GoldSchema = new mongoose.Schema({
    total:  { type: Number},
    log: { type: String}
   }, {timestamps: true }) 

   mongoose.model('Gold', GoldSchema); 
   
// register the schema as a model
var Gold = mongoose.model('Gold', GoldSchema);