const {storage} = require('config');
module.exports = {

  getContainerList: async (ctx, next) => {
    let result = await storage
        .getList()
        .catch(console.error);

    ctx.body = result;
    ctx.status = result ? 200 : 500;
    await next();
  },

  getContainerById: async (ctx, next) => {
    const {id} = ctx.params;
    let result = await storage
        .read(id)
        .catch(console.error);

    ctx.body = result;
    ctx.status = result ? 200 : 500;
    await next();
  }

};