import ThemeStyles from "../styling/Theme.module.css";
import FormStyles from "../styling/Form.module.css";
import PaletteStyles from "../styling/Palette.module.css";
import Icon from "../components/images/icon.svg";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

export function LoginRegister() {
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loginStatis, setLoginStatis] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const check = () => {
    Axios.post("http://localhost:3001/login", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      if (response.data.message) {
        setIsLogin(false);
      } else {
        setIsLogin(true);
      }
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatis(response.data.message);
      } else {
        setLoginStatis(response.data[0].username);
      }
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

  const handleValueChange = () => {
    isAlphaNumeric(usernameReg, passwordReg);
    check();
  };

  useEffect(() => {
    handleValueChange();
  }, [usernameReg, passwordReg]);

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
          {/* disabled: true when can not submit or is not login */}

          <div>
            <button
              disabled={!submit || !isLogin}
              style={{
                background: submit && isLogin ? "#FFFFFF" : "#8A8A8A",
                border:
                  submit && isLogin ? "5px solid #BF7037" : "5px solid black",
                color: submit && isLogin ? "#BF7037" : "black",
              }}
              className={FormStyles.button}
              onClick={login}
              value="login"
            >
              login
            </button>

            {/* REGISTRATION BUTTON ======================================================*/}
            {/* disabled: true when can not submit or when is login*/}

            <button
              disabled={!submit || isLogin}
              style={{
                marginRight: "20px",
                background: submit && !isLogin ? "#FFFFFF" : "#8A8A8A",
                border:
                  submit && !isLogin ? "5px solid #BF7037" : "5px solid black",
                color: submit && !isLogin ? "#BF7037" : "black",
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
          <h1>{loginStatis}</h1>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
