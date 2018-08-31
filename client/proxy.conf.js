const serverPort = process.env.SERVER_PORT || process.env.PORT || 3000;

module.exports = {
  "/": {
    "target": "http://localhost:" + serverPort,
    "secure": false,
    "ws": true
  }
};
