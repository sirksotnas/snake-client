const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "172.24.5.65",
    port: "50541",
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected");
  });

  conn.on("data", (data) => {
    console.log("server says:", data);
  });

  return conn;
};

module.exports = {
  connect
};