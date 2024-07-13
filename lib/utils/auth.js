const axios = require("axios");
const https = require("https");

const {
  IS_KEYCLOAK_REALM_ADMIN_CLIENT_ID,
  IS_KEYCLOAK_REALM_ADMIN_CLIENT_SECRET_KEY,
  IS_BASE_URL,
  IS_REALM,
} = process.env;

async function validateToken(req, res, next) {
  const adminID = IS_KEYCLOAK_REALM_ADMIN_CLIENT_ID;
  const adminSecretKey = IS_KEYCLOAK_REALM_ADMIN_CLIENT_SECRET_KEY;

  const url = `${IS_BASE_URL}/auth/realms/${IS_REALM}/protocol/openid-connect/token/introspect`;

  const axiosInstance = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });

  const data = {
    client_id: adminID,
    client_secret: adminSecretKey,
    token: req?.headers?.authorization?.split(" ")[1],
  };

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const options = {
    method: "POST",
    headers,
    data,
    url,
  };

  const result = await axiosInstance(options);

  if (!result.data.active) {
    throw new Error("token is bad");
  }

  res.statusCode = "200";
  res.response = "ok";
  next();
}

module.exports = validateToken;
