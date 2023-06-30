import Saved from "../components/images/saved.svg";
import ThemeStyles from "../styling/Theme.module.css";
import { useState } from "react";
import DropDown from "../components/DropDown";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, selectUser } from "../components/redux/userSlice";
import { ImExit } from "react-icons/im";
import { random } from "../components/redux/colourSlice";
import { motion } from "framer-motion";

export function Home() {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const colours = () => {
    return ["red", "green", "blue"];
  };

  const handleLogout = () => {
    dispatch(logoutUser);
    navigate("/");
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  
  // ==========================================================================
  return (
    <div className={ThemeStyles.outerFrame} style={{ background: "#DD517E" }}>
      <button
        style={{
          background: "none",
          border: "none",
          position: "fixed",
          left: "20px",
          top: "20px",
        }}
      >
        <ImExit
          size={40}
          onClick={() => {
            handleLogout();
            window.location.reload();
          }}
        />
      </button>
      <div className={ThemeStyles.innerFrame} style={{ background: "#7A98ED" }}>
        <h6
          style={{
            color: "#481D52",
            fontFamily: "monospace",
            fontWeight: "900",
            fontSize: "25px",
            textAlign: "left",
            marginBottom: "-5px",
          }}
        >
          {user.username}'s
        </h6>
        <motion.div
                whileHover={{ rotate: 10 }}
                transition={{
                    type: "spring",
                    damping: 10,
                    mass: 0.75,
                    stiffness: 100,
                }}>
        <img src={Saved} onClick={() => navigate("saved")} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
        <button
          className={ThemeStyles.button}
          style={{ border: "5px solid #481D52" }}
          onClick={() => {
            dispatch(random());
            navigate("palette");
          }}
        >
          Surprise Me
        </button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
        <button
          className={ThemeStyles.button}
          onClick={(): void => toggleDropDown()}
        >
          Random RGB
        </button>
        </motion.div>

        {showDropDown && (
          <DropDown
            colours={colours()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
