const {watcher: {attachFilters, logOptions}, storage} = require('config');
const loghose = require('docker-loghose');
const through = require('through2');
const lh = loghose(Object.assign({}, logOptions, attachFilters));

module.exports = (options) => {
  console.log("Start watcher");
  lh.pipe(through.obj(async (chunk, enc, cb) => {
    const {id, line} = chunk;
    console.log(`${id}::${line}`);
    await storage.write(id, line);
    await cb()
  }))
};




