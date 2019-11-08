//Better way is having 2 different containers - one for watcher and one for server (also one container for storage)
const {exec} = require('child_process');
require('./app/server');
exec('npm run start::logger', _ => null);
