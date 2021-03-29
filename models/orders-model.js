'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema ({
    cliente: {
        type: String
    },
    produto: {
        type: String
    },
    quantidade: {
        type: Number
    },
    dataHora: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'Aprovado'
    }
});

module.exports = mongoose.model('Orders', orderSchema);