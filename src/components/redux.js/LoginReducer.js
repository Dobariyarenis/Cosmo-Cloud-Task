const intialLogin =
  localStorage.getItem("login") && localStorage.getItem("login") == "true"
    ? true
    : false;
const LoginReducer = (state = intialLogin, action) => {
  switch (action.type) {
    case "SetLogin": {
      let loginBoolean = action.login;
      localStorage.setItem("login", loginBoolean);
      return true;
    }
    default:
      return state;
  }
};
export default LoginReducer;
