var express = require('express');
var app = express();

Order = require('./models/orders-model');

bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var routes = require('./routes/orders-routes');
routes(app);

var server = app.listen(80, function(){
    console.log("API server started on http://%s:%s", server.address().address, server.address().port);
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/waislan-db', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('Database open at: mongodb://' + db.host + ':' + db.port + '/' + db.name);
})
