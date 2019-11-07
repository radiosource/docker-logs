const {name, version} = require('../package.json');
module.exports = {
  app: {name, version},
  server: {
    port: process.env.NODE_APP_INSTANCE || 3000
  },
  logger: {

    //Filters for attaching containers
    attachFilters: {
      matchByName: /.*/,
      matchByImage: /.*/,
      skipByName: /.*disableLog.*/,
      skipByImage: /.*disableLog.*/,
    },

    logOptions: {
      json: false, // parse the lines that are coming as JSON
      docker: null, // here goes options for Dockerode
      events: null, // an instance of docker-allcontainers
    }
  },

  //all types of storage must have the same interface.
  // it would be nice to use interfaces from Typescript here
  storage: require(`../app/models/fileSystemModel`)
};
