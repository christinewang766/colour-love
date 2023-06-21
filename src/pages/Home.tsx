import Saved from "../components/saved.svg";
import ThemeStyles from "../styling/Theme.module.css";
import { useState } from "react";
import DropDown from "../components/DropDown";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { randomState } from "../components/actions/stateTypes";

export function Home() {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const dispatch = useDispatch();

  const colours = () => {
    return ["Red", "Green", "Blue"];
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const navigate = useNavigate();
  // ==========================================================================
  return (
    <div className={ThemeStyles.outerFrame} style={{ background: "#DD517E" }}>
    <div className={ThemeStyles.innerFrame} style={{ background: "#7A98ED" }}>
        <img src={Saved} />
        <button
          className={ThemeStyles.button}
          style={{ border: "5px solid #481D52" }}
          onClick={() => {
            dispatch(randomState());
            navigate("palette");
          }}
        >
          Surprise Me
        </button>
        <button
          className={ThemeStyles.button}
          onClick={(): void => toggleDropDown()}
        >
          Random RGB
        </button>

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
