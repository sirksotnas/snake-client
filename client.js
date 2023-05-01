const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected");
    // snake initials
    conn.write("Name: KMS");
    // snake commands
    // setInterval(() => {
    //   conn.write("Move: up")
    // }, 50);
  });

  conn.on("data", (data) => {
    console.log("server says:", data);
  });

  return conn;
};

module.exports = {
  connect
};