
var mongoose = require('mongoose');
var Gold = mongoose.model('Gold');
var golds = require('../controllers/golds.js');
module.exports = function(app) {
    
    app.get('/gold', function(req, res) { 
        res.json()      
    })
    app.post('/gold', function(req, res) {
        golds.add(req, res)
    })





   

   
}
