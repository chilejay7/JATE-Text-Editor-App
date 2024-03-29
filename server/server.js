const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

// This is a static route set to serve the content of the bundled webpack files in the dist directory.
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
