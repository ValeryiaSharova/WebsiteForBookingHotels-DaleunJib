const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const chalk = require("chalk");
const cors = require("cors");
const path = require("path");
const initDatabase = require("./startUp/initDatabase");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api", routes);

dotenv.config();

const PORT = process.env.PORT ?? 8080;

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "../client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  });
}

async function start() {
  try {
    mongoose.connection.once("open", () => {
      initDatabase();
    });
    await mongoose.connect(process.env.MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    app.listen(PORT, () =>
      console.log(chalk.greenBright(`Server has been started on port ${PORT}`))
    );
  } catch (error) {
    console.log(chalk.redBright(error.message));
    process.exit(1);
  }
}

start();
