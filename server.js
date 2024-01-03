const express = require('express');
const path = require('path');
// const fs = require('fs');
// Import the feedback router
const api = require('./routes/index');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

// Send all the requests that begin with /api to the index.js in the routes folder
app.use('/api', api);

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));