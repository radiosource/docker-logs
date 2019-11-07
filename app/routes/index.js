const Router = require('koa-router');
const router = new Router();
const indexController = require('../controllers/indexController');

router
    .get('/list', indexController.getContainersList)
    .get('/container/:id', indexController.getContainerById)
    .get('/ping', async (ctx, next) => {
      ctx.body = 'pong';
      ctx.status = 200;
      await next();
    })
;


module.exports = router.routes();
