import api from "../axios/axios";

export default class AuthService {
  static async login(email, password) {
    return api.post("/login", { email, password });
  }
  static async registration(email, password, localCart) {
    return api.post("/registration", { email, password, localCart });
  }
  static async logout() {
    return api.post("/logout");
  }
}
