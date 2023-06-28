import ThemeStyles from "../styling/Theme.module.css";
import PaletteStyles from "../styling/Palette.module.css";
import SavedStyles from "../styling/Saved.module.css";
import { useNavigate } from "react-router-dom";
import { ImExit } from "react-icons/im";
import { useSelector } from "react-redux";
import { selectUser } from "../components/redux/userSlice";
import SimplePalette from "../components/SimplePalette";

export function Saved() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

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
      <div
        className={SavedStyles.innerFrame}
      >
        <h6 className={PaletteStyles.title}>
          {/* {user.username}'s */}
          saved
        </h6>
        <div className={SavedStyles.category}>random</div>
        <SimplePalette/>
        <SimplePalette/>
        <SimplePalette/>
        <SimplePalette/>
        <SimplePalette/>
        <SimplePalette/>
        <SimplePalette/>
      </div>
    </div>
  );
}

export default Saved;
