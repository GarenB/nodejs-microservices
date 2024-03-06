const customAxios = require("../../utils/axiosInterceptor");

const { IS_BASE_URL, IS_REALM } = process.env;

async function editUserService({
  username,
  firstName,
  lastName,
  email,
  password,
  userId,
}) {
  const url = `${IS_BASE_URL}/auth/admin/realms/${IS_REALM}/users/${userId}`;

  const headers = {
    "Content-Type": "application/json",
    Authorization: customAxios.defaults.headers.Authorization,
  };

  const data = {
    username,
    firstName,
    lastName,
    email,
    credentials: [
      {
        type: "password",
        temporary: false,
        value: password,
      },
    ],
  };

  const options = {
    method: "PUT",
    headers,
    data,
    url,
  };

  return customAxios(options);
}

module.exports = { editUserService };
