let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // register event listener
  stdin.on("data", handleUserInput);
  return stdin;
};

// commands
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  const moves = {
    w: "Move: up",
    a: "Move: left",
    s: "Move: down",
    d: "Move: right"
  };
  for (const move in moves) {
    if (move === key) {
      connection.write(moves[move]);
    }
  }
  const messages = {
    "1": "Say: Good Game!",
    "2": "Say: Loser!",
    "3": "Say: Next Game!"
  };
  for (const message in messages) {
    if (message === key) {
      connection.write(messages[message]);
    }
  }
};

module.exports = { setupInput };