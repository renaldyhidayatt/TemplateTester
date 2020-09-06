import axios from "axios";

export const authService = {
  login,
  logout,
  register,
};

function login(dataToSubmit) {
  return axios.post("/api/auth/signin", dataToSubmit).then((res) => {
    if (res.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }

    return res.data;
  });
}

function logout() {
  localStorage.removeItem("user");
}

function register(dataToSubmit) {
  return axios.post("/api/auth/signup", dataToSubmit);
}
