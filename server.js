const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

connections = [];

server.listen(process.env.PORT || 3000, function() {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

io.on("connection", socket => {
  connections.push(socket);
  io.emit("userCount", { userCount: connections.length });
  console.log(`Connected: ${connections.length} sockets connected`);

  socket.on("message", data => {
    console.log(data.text);
  });

  socket.on("disconnect", () => {
    connections.splice(connections.indexOf(socket), 1);
    io.emit("userCount", { userCount: connections.length });
    console.log(`Disconnected: ${connections.length} sockets connected`);
  });
});

nextApp
  .prepare()
  .then(() => {
    app.get("/p/:id", (req, res) => {
      const actualPage = "/post";
      const queryParams = { title: req.params.id };
      nextApp.render(req, res, actualPage, queryParams);
    });

    app.get("*", (req, res) => {
      return handle(req, res);
    });

    app.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
