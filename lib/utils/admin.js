const axios = require("axios");
const https = require("https");
const qs = require("qs");

const {
  IS_KEYCLOAK_REALM_ADMIN_CLIENT_ID,
  IS_KEYCLOAK_REALM_ADMIN_CLIENT_SECRET_KEY,
  IS_BASE_URL,
  IS_REALM,
} = process.env;

async function getKeycloakAdminToken() {
  const adminID = IS_KEYCLOAK_REALM_ADMIN_CLIENT_ID;
  const adminSecretKey = IS_KEYCLOAK_REALM_ADMIN_CLIENT_SECRET_KEY;

  const url = `${IS_BASE_URL}/auth/realms/${IS_REALM}/protocol/openid-connect/token`;

  const axiosInstance = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });

  const data = {
    grant_type: "client_credentials",
    client_id: adminID,
    client_secret: adminSecretKey,
  };

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const options = {
    method: "POST",
    headers,
    data: qs.stringify(data),
    url,
  };

  const result = await axiosInstance(options);
  return result.data.access_token;
}

module.exports = getKeycloakAdminToken;
