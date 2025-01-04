const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.send('Hello');
  }).catch(err => {
    // Error handling that doesn't use next(err) to pass error to Express error handler
    console.error(err); // This will log error, but won't trigger 500 status
    res.status(500).send('Something went wrong');
  });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    // Simulate an error
    setTimeout(() => {
      reject(new Error('Something went wrong'));
    }, 100);
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});