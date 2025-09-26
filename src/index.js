// const express = require("express");
// const { PORT } = require("./config");

const express = require("express");
const { ServerConfig } = require("./config/index.js");
const apiRoutes = require("./routes/index.js");
const app = express();

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfullly Started the server on ${ServerConfig.PORT} `);
  // logger.info(`Successfullly Started the server on ${ServerConfig.PORT}`, {});
  //2025-09-21 15:17:56 : info : Successfullly Started the server on 7000
  // logger.error aur logger.
});

app.get("/", (req, res) => {
  res.send(`Successfullly Started the server on PORT : ${ServerConfig.PORT}`);
});
