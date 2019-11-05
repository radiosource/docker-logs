const {exec} = require('child_process');
require('./app/api');
exec('npm run start::logger', _ => null);
