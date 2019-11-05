const fs = require('fs');
const streams = new Map();
const LOG_DIR = `${__dirname}/../../logs`;
const ID_REQUIRED_MSG = 'containerId is required';
const PAYLOAD_REQUIRED_MSG = 'containerId is required';
const ENCODING = 'utf8';
const STREAM_OPTIONS = {
  encoding: ENCODING,
  flags: 'a+',
};

module.exports = {

  write(containerId, payload) {
    if (!containerId) throw Error(ID_REQUIRED_MSG);
    if (!payload) throw Error(PAYLOAD_REQUIRED_MSG);
    if (!streams.has(containerId)) {
      streams.set(containerId, fs.createWriteStream(`${LOG_DIR}/${containerId}.log`, STREAM_OPTIONS));
      streams.get(containerId).on("error", err => console.log(err));//we can handle error like we wants
    }

    return new Promise(resolve => streams.get(containerId).write(`${payload}\n`, resolve));
  },

  read(containerId) {
    if (!containerId) throw Error(ID_REQUIRED_MSG);
    return new Promise(
        (resolve, reject) => fs.readFile(`${LOG_DIR}/${containerId}.log`, ENCODING,
            (err, data) => err ? reject(err) : resolve(data)
        ));
  },

  async getList() {
    return new Promise(
        (resolve, reject) => fs.readdir(LOG_DIR,
            (err, data) => err ? reject(err) : resolve(data)
        ))
        .then(files => files.filter(fileName => fileName.endsWith('.log')))
        .then(files => files.map(fileName => fileName.replace('.log', '')))
        ;
  }
}
;