import Icon from "../components/icon.svg";
import ThemeStyles from "../styling/Theme.module.css";
import { useNavigate } from "react-router-dom";
import BallStyles from "../styling/Ball.module.css";

// CODE INSPO: https://codepen.io/reginabattle/pen/RvyjWy
let ball = document.getElementById("ball");

let ballX = 0;
let ballY = 0;

let speed = 0.1;

const onMouseMove = (e) => {
  let distX = e.pageX - ballX;
  let distY = e.pageY - ballY;

  ballX = ballX + distX * speed;
  ballY = ballY + distY * speed;

  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
};

document.addEventListener("mousemove", onMouseMove);

const handleIconClick = () => {
  alert("meow");
  ball.style.visibility = "visible";
};

export function Login() {
  const navigate = useNavigate();
  
      // ==========================================================================
  return (
    
    <div className={ThemeStyles.outerFrame} style={{background:'#DD517E'}}>
      <div className={ThemeStyles.innerFrame} style={{background:'#7A98ED'}}>
        <img src={Icon} />
        <img
        id="ball"
        className={BallStyles.ball}
        src={Icon}
      />
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
