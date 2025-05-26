// server.js
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;
const DIST_PATH = path.join(__dirname, 'dist');

app.use(express.static(DIST_PATH));

// Redirect all routes to index.html (for Angular routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_PATH, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
