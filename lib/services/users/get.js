const customAxios = require("../../utils/axiosInterceptor");

const { IS_BASE_URL, IS_REALM } = process.env;

async function getAllUsersService() {
  const url = `${IS_BASE_URL}/auth/admin/realms/${IS_REALM}/users`;

  const headers = {
    "Content-Type": "application/json",
    Authorization: customAxios.defaults.headers.Authorization,
  };

  const options = {
    method: "GET",
    headers,
    url,
  };

  const response = await customAxios(options);
  return response.data;
}

module.exports = { getAllUsersService };
