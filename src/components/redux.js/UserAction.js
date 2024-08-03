export const AddUserAction = (data) => {
  return {
    type: "AddUser",
    data: data,
  };
};
export const EditUser = (index, data) => {
  return {
    type: "EditUser",
    index: index,
    data: data,
  };
};
export const DeleteUser = (index) => {
  return {
    type: "DeleteUser",
    index: index,
  };
};
export const DeleteAllUser = (DeleteAllUser) => {
  return {
    type: DeleteAllUser,
  };
};
export const SetLogin = (login) => {
  return {
    type: "SetLogin",
    login: login,
  };
};
