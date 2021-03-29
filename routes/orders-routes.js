module.exports = function (app){
    var controllerOrders = require('../controllers/orders-controller');

    app.get('/', function (req, res){
        res.send('Requisition by: ' + req.address + ':' + req.port);
    })

    app.route('/orders')
        .get(controllerOrders.getOrders)
        .post(controllerOrders.insertAnOrder);

    app.route('/orders/:id')
        .get(controllerOrders.getOrderById)
        .put(controllerOrders.updateOrderById)
        .delete(controllerOrders.deletOrderById);
}