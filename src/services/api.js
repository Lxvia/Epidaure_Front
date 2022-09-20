import axios from "axios";
import Cookies from "js-cookie";
import { loggedAtom } from "./Atoms/user";

// const apiUrl = "https://epidaure-api-preprod.herokuapp.com";
const apiUrl = process.env.REACT_APP_BACK_URL;
const API = axios.create({ baseURL: apiUrl });
const API2 = axios.create({ baseURL: apiUrl });

API.interceptors.request.use(({ headers, ...config }) => ({
  ...config,
  headers: {
    ...headers,
    "Content-Type": "application/json",
    Authorization: `Bearer ${headers.Authorization || Cookies.get("token")}`,
  },
}));

API2.interceptors.request.use(({ headers, ...config }) => ({
  ...config,
  headers: {
    ...headers,
    "Content-Type": "application/json",
  },
}));

export default class APIManager {
  static async registerUser(email, password, practice_id) {
    const response = await API.post("/users", {
      user: { email: email, password: password, practice_id: practice_id },
    });
    // const jwt = response.headers.authorization.slice(7);
    // Cookies.set("token", jwt);
    return response.data;
  }

  static async loginUser(email, password) {
    const response = await API2.post("/users/sign_in", {
      user: { email: email, password: password },
    });
    const jwt = response.headers.authorization.slice(7);
    Cookies.set("token", jwt);
    return response.data;
  }

  static async logoutUser() {
    const response = await API.delete("/users/sign_out");
    Cookies.remove("token");
    return response.data;
  }

  static async forgotPasswordUser(email) {
    const response = await API2.post("/users/password", {
      user: { email: email },
    });
    return response.data;
  }

  static async resetPasswordUser(userToken, newPassword, passwordConfirmation) {
    const response = await API2.patch("/users/password", {
      user: {
        reset_password_token: userToken,
        password: newPassword,
        password_confirmation: passwordConfirmation,
      },
    });
    return response.data;
  }

  static async memberData() {
    const response = await API.get("/member-data");
    return response;
  }

  static async practiceData(id) {
    const response = await API.get("/practices/" + id);
    return response.data;
  }

  static async editUser(email,password) {
    const response = await API.patch("/users", {
      user: {
        email : email,
        password : password
      }
    })
    return response.data;
  }
}
