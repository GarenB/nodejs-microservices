const customAxios = require("../../utils/axiosInterceptor");

const { IS_BASE_URL, IS_REALM } = process.env;

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

module.exports = { signUpService };
