const dotenv = require("dotenv");
// import dotenv from "dotenv";
dotenv.config();

// module.exports = { PORT: process.env.PORT };

const ServerConfig = {
    PORT: process.env.PORT,
    FLIGHT_SERVICE: process.env.FLIGHT_SERVICE
};

module.exports = ServerConfig;
