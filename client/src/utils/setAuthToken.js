import axios from "axios";

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export const setAdminAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["y-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["y-auth-token"];
  }
};
