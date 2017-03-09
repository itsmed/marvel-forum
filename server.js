'use strict';

const express = require('express');
const path = require('path');

const port = 8000;
const publicPath = path.resolve(__dirname, 'public');
const staticPath = path.resolve(__dirname, 'src');

const app = express();

app.use(express.static(staticPath));

app.get('/', (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
