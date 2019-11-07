const {storage} = require('config');
const {render} = require('ect')({root: __dirname + '/../../public/views', ext: '.ect'});

module.exports = {

  getContainersList: async (ctx, next) => {
    const
        h1 = 'List of all containers that have logs',
        result = await storage
            .getList()
            .catch(console.error.bind(null, "getContainersList::")),
        items = result || [];

    ctx.body = render('list', {items, h1});
    ctx.status = 200;
    await next();
  },

  getContainerById: async (ctx, next) => {
    const
        {id} = ctx.params,
        h1 = `Container logs. Id: ${id}`,
        result = await storage
            .read(id)
            .catch(console.error.bind(null, "getContainerById::")),
        items = result || [];

    ctx.body = render('logs', {items, h1});
    ctx.status = 200;
    await next();
  }

};