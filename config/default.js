const {name, version} = require('../package.json');
module.exports = {
  app: {name, version},
  api: require(`./default/api`),
  logger: require(`./default/logger`),

  //all types of storage must have the same interface.
  // it would be nice to use interfaces from Typescript here
  storage: require(`../app/models/fileSystemModel`)
};
