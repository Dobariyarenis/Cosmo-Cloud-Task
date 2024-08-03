import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import TextError from "./TextError";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { SetLogin } from "./redux.js/UserAction";

const Login = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (store.login) {
      navigate("/users");
    }
  }, []);
  const State = {
    email: "oxfordamreli3@gmail.com",
    password: "123",
  };
  const initialValues = {
    email: "oxfordamreli3@gmail.com",
    password: "123",
  };
  const validationSchema = yup.object({
    email: yup.string().email("Email Format is not Valid").required("Required"),
    password: yup.string().required("Required"),
  });
  const onSubmit = (value, p) => {
    if (value.email === State.email && value.password === State.password) {
      toast.success("Login Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(SetLogin(true));
      navigate("/users");
    } else {
      toast.error("Invalid UserName Or Password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    p.resetForm();
  };
  return (
    <div className="LoginDiv">
      <h1>Login</h1>
      <div className="LoginDiv1">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div style={{ textAlign: "start", marginLeft: "5%" }}>
              <label>Email Address</label>
            </div>
            <Field className="loginInputField" type="email" name="email" />
            <div style={{ textAlign: "start", marginLeft: "5%" }}>
              <ErrorMessage name="email" component={TextError} />
            </div>
            <div style={{ textAlign: "start", marginLeft: "5%" }}>
              <label>Password</label>
            </div>
            <Field
              className="loginInputField"
              type="password"
              name="password"
            />
            <div style={{ textAlign: "start", marginLeft: "5%" }}>
              <ErrorMessage name="password" component={TextError} />
            </div>
            <br />
            <button type="submit" className="loginButton">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
