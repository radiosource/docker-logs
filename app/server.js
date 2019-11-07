const
    config = require('config'),
    express = require('express'),
    app = express(),
    routes = require('./routes');

app.use('/', routes);
const server = app.listen(config.server.port, _ => console.log('%s listening at port %d', config.app.name, config.server.port))

module.exports = server;