var mongoose = require('mongoose');
var Gold = mongoose.model('Gold');
module.exports = {
    show: function(req, res) {
        Gold.find({}, function(err, data) {
            if (data) {
                res.json({message: "Success", data: data}) 
            }
            else if (err) {
                console.log(err); 
                res.json({message: "error retrieving quotes", err:err}); 
            }
        }) 
    },
    add: function(req, res) {
        console.log("this is Post Daa", req.body)
        Gold.create({total:req.body.gold, log:req.body.logs }, function(err, data) {
            if (data) {
                res.json({message: "Success", data: data}) 
            }
            else if (err) {
                console.log(err); 
                res.json({message: "error retrieving quotes", err:err}); 
            }          
        })
    }
}