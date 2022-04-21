const express = require("express");
const mongoose = require("mongoose");
const chalk = require("chalk");
const config = require("config");
const cors = require("cors");
const path = require("path");
const initDatabase = require("./startUp/initDatabase");
//const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//app.use("/api", routes);
app.use("/api", require(path.join(__dirname, "routes", "index.js")));

const PORT = config.get("port") ?? 8080;

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "../client", "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  });
}

async function start() {
  try {
    mongoose.connection.once("open", () => {
      initDatabase();
    });
    await mongoose.connect(config.get("mongoUri"));
    app.listen(PORT, () =>
      console.log(chalk.greenBright(`Server has been started on port ${PORT}`))
    );
  } catch (error) {
    console.log(chalk.redBright(error.message));
    process.exit(1);
  }
}

start();
