import GenericSerivce from "./GenericSerivce";

class UserService extends GenericSerivce {
  constructor() {
    super();
  }
  login = (email, password) =>
    new Promise((resolve, reject) => {
      this.post("users/login", { username, email })
        .then((token) => {
          localStorage.setItem("token", token);
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });

  register = (email, name, password) => {
    this.post("users/register", { name, email, password });
  };
  logout = () => {
    localStorage.setItem("token", "");
  };
}
let userService = new UserService();
export default userService;
