import net from "net";

const server = net.createServer((socket) => {
  console.log(
    "Socket connected on " + socket.localAddress + ":" + socket.localPort
  );

  socket.write("Hello from the server!");

  socket.on("data", (data) => {
    console.log("Data received: " + data);
  });
});

server.listen(8080, "127.0.0.1");
console.log("Server listening on port:", 8080);
