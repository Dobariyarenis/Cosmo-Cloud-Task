import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DeleteUser } from "./redux.js/UserAction";
import { DeleteAllUser } from "./redux.js/UserAction";
const User = () => {
  const store = useSelector((state) => state);
  const [data, Setdata] = useState(store.user);
  const [dep, Setdep] = useState(true);
  const dispatch = useDispatch();
  console.log(store, "lllllllllllllll");
  const navigate = useNavigate();
  useEffect(() => {
    Setdata(store.user);
  }, [dep]);
  function deleteItem(id) {
    dispatch(DeleteUser(id));
    toast.success("User have been Deleted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    Setdep((p) => !p);
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <h1>Users</h1>
        <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
          <Link to={"add"} className="addUserLink">
            <button className="addUserButton">Add User</button>
          </Link>
          <button
            className="deleteAllUser"
            onClick={() => {
              dispatch(DeleteAllUser("DeleteAllUser"));
              Setdata(store.user);
              toast.success("All User have been Deleted", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              Setdep((p) => !p);
            }}
          >
            Delete All User
          </button>
        </div>
      </div>
      <div
        style={{ border: "1px solid black", marginTop: "3%", padding: "1%" }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginBottom: "1%",
          }}
        >
          <h5 className="ShowDataId ShowDataBorder">
            <b>EMP_ID</b>
          </h5>
          <h5 className="ShowDataFirstName ShowDataBorder">
            <b> Name</b>
          </h5>
          <h5 className="ShowDataLastName ShowDataBorder">
            <b>ADDRESS</b>
          </h5>
          <h5 className="ShowDataEmail ShowDataBorder">
            <b>Email</b>
          </h5>
          <h5 className="ShowDataStatus ShowDataBorder">
            <b>Status</b>
          </h5>
          <h5 className="ShowDataAction ShowDataBorder">
            <b>Actions</b>
          </h5>
        </div>
        {data.map((e, i) => {
          return (
            <div className="ShowDataDiv">
              <h5
                onClick={() => {
                  navigate(`/users/detail/${e.id}`);
                }}
                className="ShowDataId ShowDataIdInTable ShowDataBorder"
              >
                {e.id}
              </h5>
              <h5 className="ShowDataFirstName ShowDataBorder">
                {e.FirstName}
              </h5>
              <h5 className="ShowDataLastName ShowDataBorder">{e.LastName}</h5>
              <a
                href={`mailto:${e.Email}`}
                className="ShowDataEmail ShowDataBorder"
              >
                {e.Email}
              </a>
              <h5 className="ShowDataStatus ShowDataBorder">{e.status}</h5>
              <h5 className="ShowDataAction ShowDataBorder">
                <div className="ShowDataActionButtonDiv">
                  <Link to={`detail/${e.id}`} className="ShowDataActionButton">
                    <button className="show">Show</button>
                  </Link>
                  <Link to={`edit/${e.id}`} className="ShowDataActionButton">
                    <button className="edit">Edit</button>
                  </Link>
                  <button
                    className="ShowDataActionButton delete"
                    onClick={() => deleteItem(i)}
                  >
                    -
                  </button>
                </div>
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default User;
