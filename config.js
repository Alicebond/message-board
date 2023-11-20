const dotenv = require("dotenv");

dotenv.config();
module.exports = {
  username: process.env.NAME,
  password: process.env.PASSWORD,
};
