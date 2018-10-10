const express = require("express");
const port = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send({ hello: 'world' });
});

app.listen(port, () => {
  console.log(`Express app is runnung on port ${port}.`);
});











