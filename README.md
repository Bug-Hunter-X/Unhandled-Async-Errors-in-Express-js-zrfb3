# Unhandled Async Errors in Express.js

This repository demonstrates a common error in Express.js applications where asynchronous operations throw errors, but these errors aren't properly handled, leading to unexpected behavior.

## The Problem

In the `bug.js` file, the asynchronous function `doSomethingAsync` can throw an error.  The provided error handling catches this error, logs it to the console, and sends a 500 status code. HOWEVER, it *doesn't* use `next(err)` to pass the error to the Express error-handling middleware.  This means that while the client receives a 500 response, the error isn't properly managed by the Express framework and may not be logged properly or show up in monitoring tools.

## The Solution

The `bugSolution.js` file shows the correct way to handle errors in async Express.js middleware. By passing the error using `next(err)`, Express can properly handle the error and generate a more robust response.  This includes better logging and potential error page rendering through middleware specifically designed for handling errors.

## How to Run

1. Clone the repository.
2. Navigate to the repository directory.
3. Run `npm install express` to install the Express.js dependency.
4. Run `node bug.js` and `node bugSolution.js` separately to see the difference in error handling.