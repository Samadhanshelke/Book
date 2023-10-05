const concurrently = require('concurrently');

concurrently([
  { command: 'npm run start', name: 'client', prefixColor: 'blue' },
  { command: 'npm run server', name: 'server', prefixColor: 'green' },
])
