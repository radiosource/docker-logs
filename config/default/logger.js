module.exports = {

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
};