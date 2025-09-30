// const express = require("express");
// const { PORT } = require("./config");

const express = require("express");
const { ServerConfig,Queue  } = require("./config/index.js");
const apiRoutes = require("./routes/index.js");
const app = express();

const CRON = require('./utils/common/cronJob.js');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async() => {
  console.log(`Successfullly Started the server on ${ServerConfig.PORT} `);
  CRON();
  await Queue.connectQueue();
  console.log("queue connected")
});

app.get("/", (req, res) => {
  res.send(`Successfullly Started the server on PORT : ${ServerConfig.PORT}`);

});
