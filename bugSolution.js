const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
  doSomethingAsync().then(() => {
    res.send('Hello');
  }).catch(next);
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Something went wrong'));
    }, 100);
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});