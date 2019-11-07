const {exec} = require('child_process');
require('./app/server');
exec('npm run start::logger', _ => null);

/**@todo
 * 1) tests for generic storage
 * 2) tests for attachFilters
 * 3) date filter
 */
