const axios = require("axios");
const https = require("https");
const NodeCache = require("node-cache");

const getKeycloakAdminToken = require("./admin");

const myCache = new NodeCache();

const customAxios = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

const getToken = async () => {
  const key = "token_key";
  const cachedToken = myCache.get(key);

  if (cachedToken !== undefined) {
    return cachedToken;
  } else {
    const newToken = await getKeycloakAdminToken();
    myCache.set(key, newToken, 3600);
    return newToken;
  }
};

const requestHandler = async (request) => {
  const token = await getToken();
  request.headers.Authorization = `Bearer ${token}`;
  return request;
};

const responseHandler = (response) => response;

customAxios.interceptors.request.use((request) => requestHandler(request));
customAxios.interceptors.response.use((response) => responseHandler(response));

module.exports = customAxios;
