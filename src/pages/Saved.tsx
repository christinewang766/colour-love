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
  const hexes: string[] = ["red", "blue", "green", "pink"];

  function ShowRandomPalettes() {
    return (
      <div>
        <div className={SavedStyles.category}>random</div>
        <SimplePalette hexes={hexes} />
        <hr style={{ color: "#481D52" }} />
        <SimplePalette hexes={hexes} />
        <hr style={{ color: "#481D52" }} />
        <SimplePalette hexes={hexes} />
        <hr style={{ color: "#481D52" }} />
        <SimplePalette hexes={hexes} />
        <hr style={{ color: "#481D52" }} />
        <SimplePalette hexes={hexes} />
        <hr style={{ color: "#481D52" }} />
      </div>
    );
  }

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
      <div className={SavedStyles.innerFrame}>
        <h6 className={PaletteStyles.title}>
          {/* {user.username}'s */}
          saved
        </h6>
        <ShowRandomPalettes />
        <div className={SavedStyles.category}>red</div>
        <div className={SavedStyles.category}>green</div>
        <div className={SavedStyles.category}>blue</div>
      </div>
    </div>
  );
}

export default Saved;
