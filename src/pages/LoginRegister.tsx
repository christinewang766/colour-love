import ThemeStyles from "../styling/Theme.module.css";
import FormStyles from "../styling/Form.module.css";
import PaletteStyles from "../styling/Palette.module.css";
import Icon from "../components/images/icon.svg";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";

export function LoginRegister() {
  const navigate = useNavigate();
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
  function isAlphaNumeric(str: string): boolean {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (
        !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)
      ) {
        // lower alpha (a-z)
        return false;
      }
    }
    return true;
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
          onSubmit={() => {
            if (!isAlphaNumeric(usernameReg) || !isAlphaNumeric(passwordReg)) {
              alert(
                "Username and password must only contain numbers and letters."
              );
            } else {
              register();
            }
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
                }}
              />
            </div>
            <input
              style={{ alignSelf: "flex-end", marginRight: "20px" }}
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
