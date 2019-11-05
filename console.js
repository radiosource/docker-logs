const argv = require('optimist')
    .usage('Usage: $0 [--action [string]] [--opt [object]]')
    .options('opt', {
      alias: 'options',
      'default': {},
      description: 'example --opt.app=mobile --opt.s=1'
    })
    .argv;


(async () => await require('./app/logger')(argv.opt))();
