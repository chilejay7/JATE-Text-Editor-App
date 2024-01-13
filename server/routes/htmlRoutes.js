const path = require('path');

// No additional routes are required since the appliction only needs to server the index.html.
// The database is run though  the browser using indexDB and won't be making additional requests to the server.
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
