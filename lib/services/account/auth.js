const customAxios = require("../../utils/axiosInterceptor");
const axios = require("axios");

const {
  IS_BASE_URL,
  IS_REALM,
  IS_KEYCLOAK_REALM_ADMIN_CLIENT_ID,
  IS_KEYCLOAK_REALM_ADMIN_CLIENT_SECRET_KEY,
} = process.env;

async function signInService({ username, password }) {
  const adminID = IS_KEYCLOAK_REALM_ADMIN_CLIENT_ID;
  const adminSecretKey = IS_KEYCLOAK_REALM_ADMIN_CLIENT_SECRET_KEY;

  const url = `${IS_BASE_URL}/auth/realms/${IS_REALM}/protocol/openid-connect/token`;

  const data = {
    grant_type: "password",
    client_id: adminID,
    client_secret: adminSecretKey,
    username,
    password,
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

  const response = await axios(options);
  return response.data.access_token;
}

async function signUpService({
  username,
  firstName,
  lastName,
  email,
  password,
}) {
  const url = `${IS_BASE_URL}/auth/admin/realms/${IS_REALM}/users`;

  const headers = {
    "Content-Type": "application/json",
    Authorization: customAxios.defaults.headers.Authorization,
  };

  const data = {
    username,
    firstName,
    lastName,
    email,
    enabled: true,
    credentials: [
      {
        type: "password",
        temporary: false,
        value: password,
      },
    ],
  };

  const options = {
    method: "POST",
    headers,
    data,
    url,
  };

  const response = await customAxios(options);
  const userUrl = response.headers.location;
  const userData = await customAxios.get(`${userUrl}?representation=full`);
  return userData.data;
}

module.exports = { signUpService, signInService };
