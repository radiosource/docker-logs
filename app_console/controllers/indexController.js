const {logOptions, streamOptions,logDir} = require('config');
const loghose = require('docker-loghose');
const through = require('through2');
const fs = require('fs');
const lh = loghose(logOptions);
const dockerstats = require('dockerstats');

async function index(options) {
    await dockerstats.dockerAll()
        .then(data => fs.writeFileSync('./tmp.json',JSON.stringify(data,null,2)))
        .catch(error => console.error(error));


    const streams = {};
    lh.pipe(through.obj(function (chunk, enc, cb) {
        const {id, line} = chunk;
        console.log(`${id}::${line}`);
        if (!streams[id])  {
            streams[id] = fs.createWriteStream(`${logDir}/${id}.log`, streamOptions);
            streams[id].write(`${JSON.stringify(chunk,null,2)}\n`,_=>null);
        };
        streams[id].write(`${line}\n`,_=>null);
        // this.push(chunk.line)
        // this.push('\n')
        cb()
    }))//.pipe(writeStream)
};

module.exports={index}



