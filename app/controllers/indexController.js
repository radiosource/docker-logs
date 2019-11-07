const {storage} = require('config');
const {render} = require('ect')({root: __dirname + '/../../public/views', ext: '.ect'});

module.exports = {

  getContainersList: async (req, res, next) => {
    const
        h1 = 'List of all containers that have logs',
        responseType = req.params[0],
        result = await storage
            .getList()
            .catch(console.error.bind(null, "Error::getContainersList", "\n")),
        items = result || [];

    res.status(200)
        .send(
            render('list', {items, h1})
        );
    next()
  },

  getContainerById: async (req, res, next) => {
    const
        {id} = req.params,
        h1 = `Container logs. Id: ${id}`,
        result = await storage
            .read(id)
            .catch(console.error.bind(null, "Error::getContainerById", "\n")),
        items = result || [];


    res.status(200)
        .send(
            render('logs', {items, h1})
        );
    next()
  }

};