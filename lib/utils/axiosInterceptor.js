const axios = require("axios");
const https = require("https");

const customAxios = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

module.exports = customAxios;
