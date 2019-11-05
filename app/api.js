const
    Koa = require('koa'),
    http = require('http'),
    config = require('config'),
    bodyParser = require('koa-bodyparser'),
    app = new Koa();

const routes = require('./routes');

app.use(bodyParser());
app.use(routes);

const server = http
    .createServer(app.callback())
    .listen(config.api.port, _ => console.log('%s listening at port %d', config.app.name, config.api.port));

module.exports = server;