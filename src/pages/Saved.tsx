import ThemeStyles from "../styling/Theme.module.css";
import PaletteStyles from "../styling/Palette.module.css";
import SavedStyles from "../styling/Saved.module.css";
import { useNavigate } from "react-router-dom";
import { ImBin, ImExit } from "react-icons/im";
import { useSelector } from "react-redux";
import { selectUser } from "../components/redux/userSlice";
import SimplePalette from "../components/SimplePalette";
import Axios from "axios";
import { useEffect, useState } from "react";

export function Saved() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  var username = user.username;
  const [index, setIndex] = useState(-1);
  const [groupedPalettes, setGroupPalettes] = useState<string[][]>([]);
  const [showRandom, setShowRandom] = useState(false);
  const [showRed, setShowRed] = useState(false);
  const [showGreen, setShowGreen] = useState(false);
  const [showBlue, setShowBlue] = useState(false);

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

  const getSavedRed = async () => {
    try {
      const response = await Axios.post("http://localhost:3001/getSavedRed", {
        username: username,
      });
      if (response.data[0].savedRed !== null) {
        getPalettesHexes(response.data[0].savedRed);
      }
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  const getSavedGreen = async () => {
    try {
      const response = await Axios.post("http://localhost:3001/getSavedGreen", {
        username: username,
      });
      if (response.data[0].savedGreen !== null) {
        getPalettesHexes(response.data[0].savedGreen);
      }
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  const getSavedBlue = async () => {
    try {
      const response = await Axios.post("http://localhost:3001/getSavedBlue", {
        username: username,
      });
      if (response.data[0].savedBlue !== null) {
        getPalettesHexes(response.data[0].savedBlue);
      }
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  const savedRandom = async () => {
    try {
      const response = await Axios.post("http://localhost:3001/savedRandom", {
        hexes: groupedPalettes.join().split(',').join(' ') + ' ',
        username: username,
      });
      console.log("RESPONSE savedRandom: " + response);
    } catch (error) {
      console.log("ERROR savedRandom: " + error);
    }
  };

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

  useEffect(() => {
    console.log("index: " + index);
    let tempGPalettes: string[][] = [];
    for (let i = 0; i < groupedPalettes.length; i++) {
      if (i !== index) {
        tempGPalettes.push(groupedPalettes[i]);
      }
    }
    setGroupPalettes(tempGPalettes);
    console.log("temp: " + tempGPalettes);
    console.log("gPalettes: " + groupedPalettes);
    setIndex(-1);
  }, [index]);

  const handleDelete = () => {
    if (showRandom) {
      savedRandom();
    } else if (showRed) {
    } else if (showGreen) {
    } else {
    }
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
        <div
          className={SavedStyles.category}
          onClick={() => {
            setGroupPalettes([]);
            setShowRed(false);
            setShowGreen(false);
            setShowBlue(false);
            setShowRandom(!showRandom);
            getSavedRandom();
          }}
        >
          random
        </div>
        {showRandom &&
          groupedPalettes.map((pal, i) => {
            return (
              <div key={i}>
                <SimplePalette hexes={pal} />
                <button
                  style={{ background: "none", border: "none" }}
                  onClick={() => {
                    setIndex(i);
                    handleDelete();
                  }}
                >
                  <ImBin /> delete
                </button>

                <hr style={{ color: "#481D52" }} />
              </div>
            );
          })}
        <div
          className={SavedStyles.category}
          onClick={() => {
            setGroupPalettes([]);
            setShowRandom(false);
            setShowGreen(false);
            setShowBlue(false);
            setShowRed(!showRed);
            getSavedRed();
          }}
        >
          red
        </div>
        {showRed &&
          groupedPalettes.map((pal, i) => {
            return (
              <div key={i}>
                <SimplePalette hexes={pal} />
                <hr style={{ color: "#481D52" }} />
              </div>
            );
          })}
        <div
          className={SavedStyles.category}
          onClick={() => {
            setGroupPalettes([]);
            setShowRandom(false);
            setShowRed(false);
            setShowBlue(false);
            setShowGreen(!showGreen);
            getSavedGreen();
          }}
        >
          green
        </div>
        {showGreen &&
          groupedPalettes.map((pal, i) => {
            return (
              <div key={i}>
                <SimplePalette hexes={pal} />
                <hr style={{ color: "#481D52" }} />
              </div>
            );
          })}
        <div
          className={SavedStyles.category}
          onClick={() => {
            setGroupPalettes([]);
            setShowRandom(false);
            setShowRed(false);
            setShowGreen(false);
            setShowBlue(!showBlue);
            getSavedBlue();
          }}
        >
          blue
        </div>
        {showBlue &&
          groupedPalettes.map((pal, i) => {
            return (
              <div key={i}>
                <SimplePalette hexes={pal} />
                <hr style={{ color: "#481D52" }} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Saved;
