require('dotenv').config();
const Server = require('./src/models/server');

const server = new Server();

// Start listener only if not running inside a serverless / Vercel context
if (!process.env.VERCEL) {
  server.listen();
}

module.exports = server.app;

