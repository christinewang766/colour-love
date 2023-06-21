import Icon from "../components/icon.svg";
import ThemeStyles from "../styling/Theme.module.css";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
      // ==========================================================================
  return (
    <div className={ThemeStyles.outerFrame} style={{background:'#DD517E'}}>
      <div className={ThemeStyles.innerFrame} style={{background:'#7A98ED'}}>
        <img src={Icon} />
        <button
          className={ThemeStyles.button}
          style={{ border: "5px solid #556CC9" }}
          onClick={() => {
            navigate("login");
          }}
        >Login
        </button>
        <button
          className={ThemeStyles.button} style={{color:'white', background:'#556CC9', border: "5px solid #fff"}}
          onClick={() => {
            navigate("register");
          }}
        >Register
        </button>
      </div>
    </div>
  );
}
