const express = require('express');
const app = express();

app.get('/', (req, res) => { // new router
  res.send(' Hello flora!!!!.');
});

app.listen(8080, () => console.log('listening on port 8080'));

