// app.js
const express = require('express');
require('dotenv').config();
const userRouter = require('./src/routes/user');

const app = express();
const port = 3000;

app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
