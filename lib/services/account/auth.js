const axios = require("axios");
const customAxios = require("../../utils/axiosInterceptor");

async function signUpService({
  firstName,
  lastName,
  email,
  password,
  username,
}) {
  const url = `http://localhost:8080/auth/admin/realms/myrealm/users`;

  const headers = {
    "Content-Type": "application/json",
    Authorization: customAxios.defaults.headers.Authorization,
  };

  data = {
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
    requiredActions: ["VERIFY_EMAIL"],
  };

  const options = {
    method: "POST",
    headers,
    data,
    url,
  };

  return customAxios(options);
}

module.exports = signUpService;
