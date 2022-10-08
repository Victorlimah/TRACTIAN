import api from "./api";

// import authorization from "./headerConfig";

export async function login(data) {
  const response = await api.post(`/auth/signin`, data);
  console.log(response);
  return response.data;
}
