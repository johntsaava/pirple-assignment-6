/*
 * Primary file for the API
 *
 */

// Dependencies
const server = require("./server");
const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
  // Fork the process
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
} else {
  // If we're not on the master thread, start the HTTP server
  server.init();
}
