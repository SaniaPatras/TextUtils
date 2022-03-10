import "./App.css";
// import About from "./components/About";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Test1 from "./components/Test1";
// import Test2 from "./components/Test2";

// import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#ffcf00";
      showAlert("Enable Dark Mood", "success");
      document.title = "TextUtil -Dark-Mood";
      setInterval(() => {
        document.title = "TextUtil Amazing Dark-Mood";
      }, 2000);
      setInterval(() => {
        document.title = "TextUtil Installed Dark-Mood";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Enable Light Mood", "danger");
      document.title = "TextUtil -Light-Mood";
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title="TextUtils" changeMode={mode} toggleMode={handleMode} />
      {/* <Alert alert={alert} /> */}
      {/* <Routes>
          <Route path="about" element={<About />} />
          <Route
            path="form"
            element={
              <Form showAlertTitle={showAlert} heading="Enter Your Text Here" />
            }
          /> */}

      <Form showAlertTitle={showAlert} heading="Enter Your Text Here" />

      {/* <Footer /> */}
      {/* <Test1 />
      <Test2 /> */}
      {/* </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
