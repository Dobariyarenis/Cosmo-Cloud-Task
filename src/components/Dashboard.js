import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SetLogin } from "./redux.js/UserAction";

const Dashboard = () => {
  const navigate = useNavigate();
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!store.login) {
      navigate("/login");
    }
  }, []);
  let a = window.location.pathname;
  let path = "";
  for (let i = 6; i < a.length; i++) {
    if (a[i] == "/") {
      for (let j = i + 1; j < a.length; j++) {
        if (a[j] == "/") {
          break;
        }
        path += a[j];
      }
      break;
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <header className="userHeader">
        <button
          className="logOutButton"
          onClick={() => {
            dispatch(SetLogin(false));
            toast.success("LogOut Successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            navigate("/login");
          }}
        >
          LogOut
        </button>
      </header>
      <div className="userDiv">
        <div className="userNavLink">
          <h5 onClick={() => navigate("/users")}>users</h5>
          <h5 onClick={() => navigate(`/users/${path}`)}>
            {path ? `/${path}` : ""}
          </h5>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
