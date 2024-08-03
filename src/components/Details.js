import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { DeleteUser } from "./redux.js/UserAction";
const Details = () => {
  let login = localStorage.getItem("login");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  React.useEffect(() => {
    if (login) {
      if (login == "false") {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, []);
  const { id } = useParams();
  let index = 0;
  function deleteItem() {
    dispatch(DeleteUser(index));

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
    navigate("/login");
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      index = i;
      break;
    }
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
        <Link to={"/users"} className="addUserLink">
          <button className="addUserButton">Back To List</button>
        </Link>
      </div>
      <div className="detailMainDiv">
        <div className="detailDiv" style={{ borderTop: "2px solid black" }}>
          <div className="detailKey">First Name</div>
          <div className="detailValue">{data[index].FirstName}</div>
        </div>
        <div className="detailDiv">
          <div className="detailKey">Last Name</div>
          <div className="detailValue">{data[index].LastName}</div>
        </div>
        <div className="detailDiv">
          <div className="detailKey">Email</div>
          <a href={`mailto:${data[index].Email}`} className="detailValue">
            {data[index].Email}
          </a>
        </div>
        <div className="detailDiv">
          <div className="detailKey">Gender</div>
          <div className="detailValue">{data[index].gender}</div>
        </div>
        <div className="detailDiv">
          <div className="detailKey">Address</div>
          <div className="detailValue">{data[index].Address}</div>
        </div>
        <div className="detailDiv">
          <div className="detailKey">Status</div>
          <div className="detailValue">{data[index].status}</div>
        </div>
        <div className="detailDiv">
          <div className="detailKey">ID</div>
          <div className="detailValue">{data[index].id}</div>
        </div>
        <div className="detailDiv">
          <div className="DetailsPageButtonDiv">
            <button
              className="DetailsPageButtonEdit"
              onClick={() => {
                navigate(`/users/edit/${id}`);
              }}
            >
              Edit
            </button>
            <button className="DetailsPageButtonDelete" onClick={deleteItem}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
