import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import TextError from "./TextError";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { EditUser } from "./redux.js/UserAction";
import { useDispatch, useSelector } from "react-redux";
const Edit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  React.useEffect(() => {
    if (!store.login) {
      navigate("/login");
    }
  }, []);
  const { id } = useParams();
  let data = store.user;
  let index = 0;
  let intialvalues = {
    FirstName: "",
    LastName: "",
    Email: "",
    Address: "",
  };
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      index = i;
      intialvalues = {
        FirstName: data[index].FirstName,
        LastName: data[index].LastName,
        Email: data[index].Email,
        Address: data[index].Address,
      };
      break;
    }
  }
  const [gender, setGender] = useState(data[index].gender);
  const [status, setStatus] = useState(data[index].status);
  const validationSchema = yup.object({
    FirstName: yup.string().required("Required"),
    LastName: yup.string().required("Required"),
    Email: yup.string().email("Email Format is not Valid").required("Required"),
    Address: yup.string().required("Required"),
  });
  const onSubmit = (value, prop) => {
    let UserData = { ...value, gender: gender, status: status, id: id };
    dispatch(EditUser(index, UserData));
    console.log(store);
    prop.resetForm();
    toast.success("Record Updated", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/users");
  };
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
      <Formik
        initialValues={intialvalues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="inputDiv">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div
                style={{
                  width: "50%",
                  paddingRight: "1%",
                  textAlign: "start",
                }}
              >
                <label>First Name</label>
                <Field className="inputField" type="name" name="FirstName" />
                <ErrorMessage name="FirstName" component={TextError} />
              </div>
              <div
                style={{
                  width: "50%",
                  paddingLeft: "1%",
                  textAlign: "start",
                }}
              >
                <label>Last Name</label>
                <Field className="inputField" type="name" name="LastName" />
                <ErrorMessage name="LastName" component={TextError} />
              </div>
            </div>
            <label>Email</label>
            <Field className="inputField" type="email" name="Email" />
            <ErrorMessage name="Email" component={TextError} />
            <label>Gender</label>
            <div className="genderButtonDiv">
              <button
                type="button"
                onClick={(e) => {
                  setGender("Male");
                }}
                style={{
                  backgroundColor: gender == "Male" ? "#727272" : "transparent",
                }}
                className="genderButton"
              >
                Male
              </button>
              <button
                onClick={(e) => {
                  setGender("Female");
                }}
                type="button"
                style={{
                  backgroundColor:
                    gender == "Female" ? "#727272" : "transparent",
                }}
                className="genderButton"
              >
                Female
              </button>
              <button
                onClick={(e) => {
                  setGender("Other");
                }}
                style={{
                  backgroundColor:
                    gender == "Other" ? "#727272" : "transparent",
                }}
                type="button"
                className="genderButton"
              >
                Other
              </button>
            </div>
            <ErrorMessage name="gender" component={TextError} />
            <label>Address</label>
            <Field className="inputField" type="text" name="Address" />
            <ErrorMessage name="Address" component={TextError} />
            <label>Status</label>
            <div className="statusButtonDiv">
              <button
                type="button"
                onClick={(e) => {
                  setStatus("Active");
                }}
                style={{
                  backgroundColor:
                    status == "Active" ? "#727272" : "transparent",
                }}
                className="statusButton"
              >
                Active
              </button>
              <button
                onClick={(e) => {
                  setStatus("Inactive");
                }}
                type="button"
                style={{
                  backgroundColor:
                    status == "Inactive" ? "#727272" : "transparent",
                }}
                className="statusButton"
              >
                Inactive
              </button>
            </div>
            <ErrorMessage name="Status" component={TextError} />
            <button type="submit" className="addUserSubmitButton">
              Update
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Edit;
