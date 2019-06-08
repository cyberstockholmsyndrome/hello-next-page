var compression = require("compression");
var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var next = require("next");

var dev = process.env.NODE_ENV !== "production";
var nextApp = next({ dev });
var nextHandler = nextApp.getRequestHandler();

var port = process.env.PORT || 3000;

var numUsers = 0;

app.use(compression());

nextApp
  .prepare()
  .then(() => {
    app.get("/p/:id", (req, res) => {
      const actualPage = "/post";
      const queryParams = { title: req.params.id };
      nextApp.render(req, res, actualPage, queryParams);
    });

    io.on("connection", socket => {
      ++numUsers;
      io.emit("userCount", { userCount: numUsers });
      console.log(`Connected: ${numUsers} sockets connected`);

      socket.on("message", data => {
        console.log(data.text);
      });

      socket.on("disconnect", () => {
        --numUsers;
        io.emit("userCount", { userCount: numUsers });
        console.log(`Disconnected: ${numUsers} sockets connected`);
      });
    });

    app.get("*", (req, res) => {
      return nextHandler(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
