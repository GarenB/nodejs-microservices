const customAxios = require("../../utils/axiosInterceptor");

const { IS_BASE_URL, IS_REALM } = process.env;

async function deleteUsersService(userId) {
  const url = `${IS_BASE_URL}/auth/admin/realms/${IS_REALM}/users/${userId}`;

  const headers = {
    "Content-Type": "application/json",
    Authorization: customAxios.defaults.headers.Authorization,
  };

  const options = {
    method: "DELETE",
    headers,
    url,
  };

  return customAxios(options);
}

module.exports = { deleteUsersService };
