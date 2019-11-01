let package = require('../package');
module.exports = {
    app: {
        name: package.name,
        version: package.version
    },
    server: {
        port: process.env.NODE_APP_INSTANCE || 8081,
        lifeTime: process.env.NODE_LIFE_TIME || '', // For auto rebooting features use 'ms','m','s','h','d' suffix for this variable, for example 12h
    },

    logOptions: {
        json: false, // parse the lines that are coming as JSON
        docker: null, // here goes options for Dockerode
        events: null, // an instance of docker-allcontainers
    },

    streamOptions: {
        encoding: 'utf8',
        flags: 'w'
    },

    logDir: `${__dirname}/../logs`
};
