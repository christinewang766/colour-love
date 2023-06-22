import Icon from "../components/icon.svg";
import Dog from "../components/dog.jpg";
import ThemeStyles from "../styling/Theme.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import Woof from "../components/woof.mp3";

// BALL CODE INSPO: https://codepen.io/reginabattle/pen/RvyjWy
// let ballX = 0;
// let ballY = 0;

// let speed = 0.001;
// USE TIME (measure time, save it, measure, difference ==> modify speed)

export function Login() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState<boolean>(false);

  const handleMouseHover = () => {
    setClicked(false);
    stop();
  };

  const handleIconClick = () => {
    setClicked(!clicked);
    playWoof();
  };

  const [playWoof, { stop }] = useSound(Woof, { volume: 1 });

  var cursor = document.getElementById("cursor");
  document.body.addEventListener("mousemove", function (e) {
    if (cursor)
      (cursor.style.left = e.clientX + "px"),
        (cursor.style.top = e.clientY + "px");
  });

  // ==========================================================================
  return (
    <div className={ThemeStyles.outerFrame} style={{ background: "#DD517E" }}>
      <div className={ThemeStyles.innerFrame} style={{ background: "#7A98ED" }}>
        <h1
          style={{
            fontFamily: "cursive",
            color: clicked ? "white" : "#7A98ED",
          }}
        >
          Want to login? You'll have to be faster than Woofie!
        </h1>
        <button style={{ background: "none", border: "none" }}>
          <img
            src={Icon}
            id="icon"
            style={{ visibility: clicked ? "hidden" : "visible" }}
            onClick={() => handleIconClick()}
          />
        </button>
        <img
          style={{
            position: "fixed",
            borderRadius: "50%",
            transform: "translateX(-50%) translateY(-50%)",
            pointerEvents: "none",
            left: "-100px",
            top: "50%",
            backgroundColor: "transparent",
            zIndex: "10000",
            border: "3px solid black",
            visibility: clicked ? "visible" : "hidden",
            height: "200px",
            width: "200px",
            transition: clicked ? "all 700ms ease-out" : "all 0ms ease-out",
          }}
          id="cursor"
          src={Dog}
        ></img>
        <button
          className={ThemeStyles.button}
          style={{ border: "5px solid #556CC9" }}
          onClick={() => {
            stop();
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
            stop();
            navigate("register");
          }}
        >
          Register
        </button>
        <h4
          style={{
            fontFamily: "cursive",
            color: clicked ? "white" : "#7A98ED",
          }}
        >
          Or...go ahead and register :D
        </h4>
        <p
          style={{
            fontFamily: "cursive",
            color: clicked ? "white" : "#7A98ED",
          }}
        >
          (I bet mobile users are so confused right now)
        </p>
      </div>
    </div>
  );
}
