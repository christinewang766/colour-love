import ThemeStyles from "../styling/Theme.module.css";
import FormStyles from "../styling/Form.module.css";
import PaletteStyles from "../styling/Palette.module.css";
import Icon from "../components/images/icon.svg";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";
import { Alert } from "react-bootstrap";

export function LoginRegister() {
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [loginStatus, setLoginStatis] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const isAlphaNumeric = (str1: string, str2: string) => {
    if (/^[a-z0-9]+$/gi.test(str1) && /^[a-z0-9]+$/gi.test(str2)) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  };

  const clearForm = () => {};

  return (
    <div className={ThemeStyles.outerFrame}>
      <div className={ThemeStyles.innerFrame}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          {/* ICON ======================================================*/}

          <img
            onClick={() => navigate("/")}
            src={Icon}
            style={{ maxWidth: "80px", paddingRight: "25px" }}
            alt="icon"
          />

          {/* TITLE ======================================================*/}

          <h1 className={PaletteStyles.title}>Welcome</h1>
        </div>

        {/* FORM BOX ======================================================*/}

        <div className={FormStyles.container}>
          <div style={{ display: "grid", padding: "20px" }}>
            {/* USERNAME ======================================================*/}

            <label className={FormStyles.label}>Username:</label>
            <input
              id="username"
              required
              type="text"
              className={FormStyles.input}
              placeholder="ex. ComputerScienceIsSoCool"
              onChange={(e) => {
                setUsernameReg(e.target.value);
                isAlphaNumeric(e.target.value, passwordReg);
              }}
            />

            {/* PASSWORD ======================================================*/}

            <label style={{ paddingTop: "20px" }} className={FormStyles.label}>
              Password:
            </label>
            <input
              id="password"
              required
              type="text"
              className={FormStyles.input}
              placeholder="ex. mustOnlyBeAlphaNum766"
              onChange={(e) => {
                setPasswordReg(e.target.value);
                isAlphaNumeric(e.target.value, usernameReg);
              }}
            />
          </div>

          {/* SYNTAX ALERT ======================================================*/}

          <Alert
            style={{ maxWidth: "80%" }}
            show={!submit}
            key="danger"
            variant="danger"
          >
            Only use letters and numbers in your username and password.
          </Alert>

          {/* LOGIN BUTTON ======================================================*/}

          <div>
            <button
              disabled={!submit}
              style={{
                background: submit ? "#FFFFFF" : "#8A8A8A",
                border: submit ? "5px solid #BF7037" : "5px solid black",
                color: submit ? "#BF7037" : "black",
              }}
              className={FormStyles.button}
              onClick={login}
              value="login"
            >
              login
            </button>

            {/* REGISTRATION BUTTON ======================================================*/}

            <button
              disabled={!submit}
              style={{
                marginRight: "20px",
                background: submit ? "#FFFFFF" : "#8A8A8A",
                border: submit ? "5px solid #BF7037" : "5px solid black",
                color: submit ? "#BF7037" : "black",
              }}
              className={FormStyles.button}
              value="register"
              onClick={() => {
                register();
              }}
            >
              register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
