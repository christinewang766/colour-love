import ThemeStyles from "../styling/Theme.module.css";
import FormStyles from "../styling/Form.module.css";
import PaletteStyles from "../styling/Palette.module.css";
import Icon from "../components/images/icon.svg";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();

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
          <h1 className={PaletteStyles.title}>Login</h1>
        </div>
        <div className={FormStyles.container}>
          <div style={{ display: "grid", padding:'20px' }}>
            <label className={FormStyles.label}>Username: </label>
            <input
              type="text"
              className={FormStyles.input}
              placeholder="ex. ComputerScienceIsSoCool"
            />
            <label style={{ paddingTop: "20px" }} className={FormStyles.label}>
              Password:{" "}
            </label>
            <input
              type="text"
              className={FormStyles.input}
              placeholder="ex. mustOnlyBeAlphaNum766"
            />
          </div>
          <div style={{display:'flex'}}>
            <div style={{width: '325px'}}></div>
          <button className={FormStyles.button}>login →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
