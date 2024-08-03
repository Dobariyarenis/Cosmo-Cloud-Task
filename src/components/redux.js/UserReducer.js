const intialUser =  [];
const UserReducer = (state = intialUser, action) => {
  switch (action.type) {
    case "AddUser": {
      let UserData = state;
      UserData.push({ ...action.data });
      localStorage.setItem("user", JSON.stringify(state));
      return UserData;
    }
    case "EditUser": {
      state[action.index] = { ...action.data };
      localStorage.setItem("user", JSON.stringify(state));
      return state;
    }
    case "DeleteUser": {
      state.splice(action.index, 1);
      localStorage.setItem("user", JSON.stringify(state));
      return state;
    }
    case "DeleteAllUser": {
      state = [];
      console.log(state);
      localStorage.setItem("user", JSON.stringify(state));
      return state;
    }
    default:
      return state;
  }
};
export default UserReducer;
