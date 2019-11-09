const {storage} = require('config');
const {render} = require('ect')({root: __dirname + '/../../public/views', ext: '.ect'});

module.exports = {

  getContainersList: async (req, res, next) => {
    const
        h1 = 'List of all containers that have logs',
        list = await storage
            .getList()
            .catch(console.error.bind(null, "Error::getContainersList", "\n")),
        items = list || [];

    res.status(200).send(render('list', {items, h1}));
    next()
  },

  getContainerById: async (req, res, next) => {
    const
        {limit,offset} = req.query,
        {id} = req.params,
        h1 = `Container logs. Id: ${id}`,
        logs = await storage
            .read(id, {limit, offset})
            .catch(console.error.bind(null, "Error::getContainerById", "\n")),
        items = logs || [];

    res.status(200).send(render('logs', {items, h1}));
    next()
  }

};