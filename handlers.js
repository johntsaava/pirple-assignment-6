/*
 * Request handlers
 *
 */

// Define the handlers
const handlers = {};

// Hello handler
handlers.hello = (data, callback) => {
  callback(200, { message: "Hello from the other side" });
};

// Not found handler
handlers.notFound = (data, callback) => {
  callback(404);
};

module.exports = handlers;
