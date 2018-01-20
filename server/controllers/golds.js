var mongoose = require('mongoose');
var Gold = mongoose.model('Gold');
module.exports = {
    show: function(req, res) {
        Gold.find({}, function(err, data) {
            if (data) {
                // console.log(JSON.stringify(quotes));
                res.json('data', {data, message: "Success"}) 
            }
            if (err) {console.log(err); 
                
                res.json('err', {message: "error retrieving quotes"});}
            })
    },
    add: function(req, res) {
        console.log(req.body)
        Gold.create({total:req.body.gold, log:req.body.log }, function(err, data) {
            if (data) {
                // console.log(JSON.stringify(quotes));
                res.json('data', {data, message: "Success"}) 
            }
            if (err) {console.log(err)}; 
                
                res.json('err', {message: "error retrieving quotes"});           
        })
    }

    //update
}