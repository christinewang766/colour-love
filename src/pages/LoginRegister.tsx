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

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  // https://stackoverflow.com/questions/4434076/best-way-to-alphanumeric-check-in-javascript
  function isAlphaNumeric(str1: string, str2: string) {
    if (/^[a-z0-9]+$/gi.test(str1) && /^[a-z0-9]+$/gi.test(str2)) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  }

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
          <img
            onClick={() => navigate("/")}
            src={Icon}
            style={{ maxWidth: "80px", paddingRight: "25px" }}
            alt="icon"
          />
          <h1 className={PaletteStyles.title}>Welcome</h1>
        </div>
        <form
          id="form"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onSubmit={() => {
            register();
          }}
        >
          <div className={FormStyles.container}>
            <div style={{ display: "grid", padding: "20px" }}>
              <label className={FormStyles.label}>Username:</label>
              <input
                required
                type="text"
                className={FormStyles.input}
                placeholder="ex. ComputerScienceIsSoCool"
                onChange={(e) => {
                  setUsernameReg(e.target.value);
                  isAlphaNumeric(e.target.value, passwordReg);
                }}
              />
              <label
                style={{ paddingTop: "20px" }}
                className={FormStyles.label}
              >
                Password:
              </label>
              <input
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
            <Alert
              style={{ maxWidth: "80%" }}
              show={!submit}
              key="danger"
              variant="danger"
            >
              Only use letters and numbers in your username and password.
            </Alert>
            <input
              disabled={!submit}
              style={{
                alignSelf: "flex-end",
                marginRight: "20px",
                background: submit ? "#FFFFFF" : "#8A8A8A",
                border: submit ? "5px solid #BF7037" : "5px solid black",
                color: submit ? "5px solid #BF7037" : "5px solid black",
              }}
              className={FormStyles.button}
              type="submit"
              value="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginRegister;
