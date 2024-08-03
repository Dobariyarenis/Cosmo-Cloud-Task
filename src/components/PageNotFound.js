import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const PageNotFound = () => {
  toast.error("Invalid page", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <Link to={"/login"}>
        <button
          style={{
            border: "none",
            backgroundColor: "green",
            width: "80px",
            height: "40px",
            borderRadius: "8px",
          }}
        >
          Back
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
