// @ts-ignore
import ThemeStyles from "../styling/Theme.module.css";
// @ts-ignore
import Icon from "../components/images/icon.svg";
// @ts-ignore
import Dog from "../components/images/dogIcon.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";
// @ts-ignore
import Woof from "../components/music/woof.mp3";

/** HOME PAGE: FEATURES WELCOME BUTTON AND DOG CHASE */
export function Login() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState<boolean>(false);
  const [playWoof, { stop }] = useSound(Woof, { volume: 1 });
  var cursor = document.getElementById("cursor");

  /** DYNAMICALLY UPDATES MOUSE POSITION FOR DOG CHASE */
  document.body.addEventListener("mousemove", function (e) {
    if (cursor)
      (cursor.style.left = e.clientX + "px"),
        (cursor.style.top = e.clientY + "px");
  });

  /** *************************************************************************** */

  return (
    /** OUTER FRAME */
    <div className={ThemeStyles.outerFrame} style={{ background: "#DD517E" }}>
      {/** INNER FRAME */}

      <div className={ThemeStyles.innerFrame} style={{ background: "#7A98ED" }}>
        {/** TAUNTING TEXT: appears during dog chase */}

        <h1
          style={{
            fontFamily: "cursive",
            color: clicked ? "white" : "#7A98ED",
          }}
        >
          Want to enter? You'll have to be faster than Woofie!
        </h1>

        {/** ICON: button to initiate dog chase */}
        <button style={{ background: "none", border: "none" }}>
          <img
            src={Icon}
            className={ThemeStyles.grow}
            id="icon"
            style={{ visibility: clicked ? "hidden" : "visible" }}
            onClick={() => {
              setClicked(!clicked);
              playWoof();
            }}
          />
        </button>

        {/** DOG */}
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

        {/** WELCOME BUTTON */}

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
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
        </motion.div>

        {/** TAUNTING TEXT: appears during dog chase */}
        
        <p
          style={{
            fontFamily: "cursive",
            color: clicked ? "white" : "#7A98ED",
          }}
        >
          (I bet mobile users are so confused right now)
        </p>

        {/** ONEKO CURSOR */}

        
      </div>
    </div>
  );
}
