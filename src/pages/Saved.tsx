import ThemeStyles from "../styling/Theme.module.css";
import PaletteStyles from "../styling/Palette.module.css";
import DropDown from "../components/DropDown";
import { useNavigate } from "react-router-dom";
import { ImExit } from "react-icons/im";

export function Saved() {
  const navigate = useNavigate();

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
            navigate("/home");
          }}
        />
      </button>
      <div className={ThemeStyles.innerFrame} style={{ background: "#FCF7F3" }}>
        <h6
          className={PaletteStyles.title}
        >
          {/* {user.username}'s */}
          Temp's Saved
        </h6>
      </div>
    </div>
  );
}

export default Saved;
