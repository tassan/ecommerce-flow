// basic node server
// run with: node index.js
// then go to localhost:3000 in your browser

// require the express module
const express = require('express');

// create a new instance of express
const app = express();

// define the port
const port = 3000;

// define a route
app.get('/', (req, res) => {
    res.send('Hello World! 2023');
    }
);

// start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);

// Path: index.js