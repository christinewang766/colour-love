import ThemeStyles from "../styling/Theme.module.css";
import FormStyles from "../styling/Form.module.css";
import PaletteStyles from "../styling/Palette.module.css";
import Icon from "../components/images/icon.svg";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";

export function RegisterPage() {
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
          <h1 className={PaletteStyles.title}>Register</h1>
        </div>
        <div className={FormStyles.container}>
          <div style={{ display: "grid", padding: "20px" }}>
            <label className={FormStyles.label}>Username:</label>
            <input
              type="text"
              className={FormStyles.input}
              placeholder="ex. ComputerScienceIsSoCool"
              onChange={(e) => {
                setUsernameReg(e.target.value);
              }}
            />
            <label style={{ paddingTop: "20px" }} className={FormStyles.label}>
              Password:
            </label>
            <input
              type="text"
              className={FormStyles.input}
              placeholder="ex. mustOnlyBeAlphaNum766"
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
            />
          </div>
          <button
            style={{ alignSelf: "flex-end", marginRight: "20px" }}
            className={FormStyles.button}
            onClick={register}
          >
            register
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
