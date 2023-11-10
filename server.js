const express = require('express');
const fs = require("fs");
const path = require("path");
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require('./routes/html-routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"))
})


app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
})
