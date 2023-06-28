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
  const [groupedPalettes, setGroupPalettes] = useState<string[][]>([]);
  const [showRandom, setShowRandom] = useState(true);

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
    while (count < ogHexesArr.length) {
      for (let i = count; i < count + 4; i++) {
        palettes.push(ogHexesArr[i]);
      }
      tempGPalettes.push(palettes);
      palettes = [];
      count += 4;
    }
    setGroupPalettes(tempGPalettes);
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
        <div className={SavedStyles.category} onClick={()=>{
          setShowRandom(!showRandom);
          if(showRandom){
            getSavedRandom()
          } else {
            setGroupPalettes([]);
          }
          }}>random</div>
        {groupedPalettes.map((pal, i) => {
          return (
            <div key={i}>
              <SimplePalette hexes={pal} />
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
