import ThemeStyles from "../styling/Theme.module.css";
import PaletteStyles from "../styling/Palette.module.css";
import { useNavigate } from "react-router-dom";
import Swatch from "../components/Swatch";
import { useSelector } from "react-redux";

export function Palette() {
  const navigate = useNavigate();
  const colourState = useSelector(state => state);

  return (
    <div
      className={ThemeStyles.outerFrame}
      style={{ border: "5px solid black", background: "#DD517E" }}
    >
    <h1>{colourState}</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={PaletteStyles.swatchContainer}>
          <Swatch hex={"#ffffff"} />
          <Swatch hex={"#ffffff"} />
          <Swatch hex={"#ffffff"} />
          <Swatch hex={"#ffffff"} />
        </div>
        <div className={PaletteStyles.returnContainer}>
          <button
            className={ThemeStyles.button}
            style={{
              color: "#E68E35",
              borderColor: "#E68E35",
              marginRight: "10%",
              marginBottom: "35px",
            }}
          >
            Save Palette
          </button>
          <button
            className={ThemeStyles.button}
            style={{
              color: "#481D52",
              borderColor: "#481D52",
              marginBottom: "35px",
            }}
            onClick={() => navigate("/")}
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
}
