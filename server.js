const express = require("express");
const port = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send({ hello: 'world' });
});

// Promise e.g.
const wait = time => new Promise((resolve) => setTimeout(resolve, time));
wait(3000).then(() => console.log('Hello!')); // 'Hello!'

app.listen(port, () => {
  console.log(`Express app is runnung on port ${port}.`);
});











