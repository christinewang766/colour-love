import Icon from "../components/icon.svg";
import Dog from "../components/dog.jpg";
import ThemeStyles from "../styling/Theme.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useSound from 'use-sound';
import Woof from "../components/woof.mp3";
import Megalovania from "../components/megalovania.mp3";

// BALL CODE INSPO: https://codepen.io/reginabattle/pen/RvyjWy
let ball = document.getElementById("ball");

let ballX = 0;
let ballY = 0;

let speed = 0.1;

const onMouseMove = (e: { pageX: number; pageY: number }) => {
  let distX = e.pageX - ballX;
  let distY = e.pageY - ballY;

  ballX = ballX + distX * speed;
  ballY = ballY + distY * speed;

  if (ball) {
    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";
  }
};

document.addEventListener("mousemove", onMouseMove);

export function Login() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState<boolean>(false);
  const handleMouseHover = () => {
    setClicked(false);
    stop();
    if (ball) ball.style.visibility = "hidden";
  };
  const handleIconClick = () => {
    setClicked(!clicked);
    playWoof(); 
    if (ball) ball.style.visibility = "visible";
  };
  
  const [playWoof, { stop }] = useSound(Woof,
    { volume: 1 }
  );


  // ==========================================================================
  return (
    <div className={ThemeStyles.outerFrame} style={{ background: "#DD517E" }}>
      <div className={ThemeStyles.innerFrame} style={{ background: "#7A98ED" }}>
        <h1 style={{fontFamily:'cursive', color:(clicked ? 'white' : '#7A98ED')}}>Want to login? You'll have to be faster than Woofie!</h1>
        <button style={{ background: "none", border: "none" }}>
          <img
            src={Icon}
            id="icon"
            style={{ visibility: clicked ? "hidden" : "visible" }}
            onClick={() => handleIconClick()}
          />
        </button>
        <img
          id="ball"
          style={{
            position: "absolute",
            transform: "translate(-50%,-50%)",
            height: "200px",
            width: "200px",
            borderRadius: "50%",
            border: "2px solid black",
            visibility: "hidden",
          }}
          src={Dog}
        />
        <button
          className={ThemeStyles.button}
          style={{ border: "5px solid #556CC9" }}
          onClick={() => {
            navigate("login");
          }}
        >
          Login
        </button>
        <button
          className={ThemeStyles.button}
          onMouseEnter={() => handleMouseHover()}
          style={{
            color: "white",
            background: "#556CC9",
            border: "5px solid #fff",
          }}
          onClick={() => {
            navigate("register");
          }}
        >
          Register
        </button>
        <h4 style={{fontFamily:'cursive', color:(clicked ? 'white' : '#7A98ED')}}>Or...go ahead and register :D</h4>
        <p style={{fontFamily:'cursive', color:(clicked ? 'white' : '#7A98ED')}}>(I bet mobile users are so confused right now)</p>
      </div>
    </div>
  );
}
