import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./App.css";
import RouteFile from "./components/RouterFile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./components/redux.js/Store";
function App() {
  return (
    <Provider store={store}  className="App">
      <ToastContainer
        position="top-right"
        style={{ marginTop: "3%" }}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouteFile />
    </Provider>
  );
}

export default App;
