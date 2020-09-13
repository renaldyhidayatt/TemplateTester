const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const dbConfig = require("./config/dbSecretKeys").mongoURI;

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(morgan("dev"));

const db = require("./models");
const Role = db.role;

const PORT = process.env.PORT || 5000;

http.createServer(app).listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "x-access-token ,Content-Type, Authorization, Content-Length, X-Requested-With");
    next();
  });

  db.mongoose
    .connect(dbConfig, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connect to MongoDB.");
      initial();
    })
    .catch((err) => {
      console.error("Connection error", err);
      process.exit();
    });

  app.get("/", (req, res) => {
    res.json({ message: "Welcome to Template application." });
  });

  require("./routes/auth.routes")(app);
  require("./routes/user.routes")(app);

  require("./routes/tutorial.routes")(app);

  app.use("/posts", require("./routes/posts.routes"));
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
