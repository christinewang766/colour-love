import ThemeStyles from "../styling/Theme.module.css";
import PaletteStyles from "../styling/Palette.module.css";
import SavedStyles from "../styling/Saved.module.css";
import { useNavigate } from "react-router-dom";
import { ImExit } from "react-icons/im";
import { useSelector } from "react-redux";
import { selectUser } from "../components/redux/userSlice";
import SimplePalette from "../components/SimplePalette";
import Axios from "axios";
import { useState } from "react";

export function Saved() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  var username = user.username;
  var randomHexes: string = "";
  // var tempHexes: string = "#9e707e #1cd92f #8a0f44 #97946d #8d4502 #68ac74 #62414d #f3e2e3 #9986ca #eeead3 #a0caa0 #53611f ";
  const [groupedPalettes, setGroupPalettes] = useState<string[][]>([]);

  const getSavedRandom = async () => {
    try {
      const response = await Axios.post(
        "http://localhost:3001/getSavedRandom",
        {
          username: username,
        }
      );
      if (response.data[0].savedRandom !== null) {
        getPalettesHexes(response.data[0].savedRandom);
      }
      console.log("after axios hexes: " + response.data[0].savedRandom);
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  // pass in hexes = savedHexes.split(' ')
  function getPalettesHexes(hexes: string) {
    let tempGPalettes: string[][] = [];
    let ogHexesArr = hexes.split(" ");
    ogHexesArr.pop();
    let palettes: string[] = [];
    let count: number = 0;
    while (count < hexes.length) {
      for (let i = count; i < count + 4; i++) {
        palettes.push(ogHexesArr[i]);
      }
      tempGPalettes.push(palettes);
      palettes = [];
      count += 4;
    }
    tempGPalettes.pop();
    setGroupPalettes(tempGPalettes);
  }

  getSavedRandom();
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
        {groupedPalettes.map((opt) => {
          return (
            <div>
              <SimplePalette hexes={opt} />
              <hr style={{ color: "#481D52" }} />
            </div>
          );
        })}
        <div
          className={SavedStyles.category}
        >
          red
        </div>
        <div className={SavedStyles.category}>green</div>
        <div className={SavedStyles.category}>blue</div>
      </div>
    </div>
  );
}

export default Saved;
