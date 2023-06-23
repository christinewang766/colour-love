import Icon from "../components/images/icon.svg";
import Dog from "../components/images/dogIcon.svg";
import ThemeStyles from "../styling/Theme.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useSound from "use-sound";
import Woof from "../components/music/woof.mp3";

export function Login() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState<boolean>(false);
  const [playWoof, { stop }] = useSound(Woof, { volume: 1 });

  var cursor = document.getElementById("cursor");
  document.body.addEventListener("mousemove", function (e) {
    if (cursor)
      (cursor.style.left = e.clientX + "px"),
        (cursor.style.top = e.clientY + "px");
  });

  const handleIconClick = () => {
    setClicked(!clicked);
    playWoof();
  };

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
          Want to enter? You'll have to be faster than Woofie!
        </h1>
        <button style={{ background: "none", border: "none" }}>
          <img
            src={Icon}
            className={ThemeStyles.grow}
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
            zIndex: "10000",
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
          style={{
            color: "white",
            background: "#556CC9",
            border: "5px solid #fff",
          }}
          onClick={() => {
            stop();
            navigate("loginregister");
          }}
        >
          Welcome
        </button>
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
