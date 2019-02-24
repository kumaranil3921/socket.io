const express = require('express');
const app = express();
var server = app.listen(process.env.NODE_ENV, () => {
  console.log(`server is running on port`, server.address().port);
});