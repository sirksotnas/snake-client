const {connect} = require("./client");

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // register event listener
  stdin.on("data", handleUserInput); 
  return stdin;
  };
  // detect ctrl + c to exit
  const handleUserInput = function (key) {
  if (key === '\u0003') {
  process.exit();
  }
  };
  
  setupInput();