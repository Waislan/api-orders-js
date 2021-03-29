'use strict';

var mongoose = require('mongoose');
var Orders = mongoose.model('Orders');

exports.getOrders = function (req, res){
    Orders.find({}, function (err, msg) {
        if (err){
            res.send(err);
        }
        res.json(msg);
    });
};

exports.insertAnOrder = function (req, res){
    var newOrder = new Orders(req.body);

    newOrder.save(function (err, msg){
        if (err){
            res.send(err);
        }
        res.json({ response: 'Order successfully inserted' });
    });
};

exports.getOrderById = function (req, res){
    Orders.findById(req.params.id, function (err, msg){
        if (err){
            res.send(err);
        }
        res.json(msg);
    });
};

exports.updateOrderById = function (req, res){
    Orders.findOneAndUpdate ({
        _id: req.params.id
    }, req.body, {
        new: true
    }, function (err, msg){
        if (err){
            res.send(err);
        }
        res.json({ response: 'Order successfully updated' });
    });
};

exports.deletOrderById = function (req, res){
    Orders.remove ({
        _id: req.params.id
    }, function(err, msg){
        if (err){
            res.send(err);
        }
        res.json({ response: 'Order successfully deleted' });
    })
}