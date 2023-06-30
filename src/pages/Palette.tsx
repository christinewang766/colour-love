import ThemeStyles from "../styling/Theme.module.css";
import PaletteStyles from "../styling/Palette.module.css";
import { useNavigate } from "react-router-dom";
import Swatch from "../components/Swatch";
import Axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../components/redux/userSlice";
import { motion } from "framer-motion";
import useSound from "use-sound";
import Saved from "../components/music/saved.mp3";


export function Palette() {
  const navigate = useNavigate();
  const [minSat, maxSat, minLight, maxLight] = [10, 100, 10, 95];
  const [minRed1, maxRed1, minRed2, maxRed2] = [0, 60, 280, 360];
  const [minGreen, maxGreen] = [60, 170];
  const [minBlue, maxBlue] = [170, 280];
  const [minRand, maxRand] = [0, 359];
  const { colour } = useSelector((state) => state.colour);
  const [playSaved] = useSound(Saved);
  const user = useSelector(selectUser);
  var username = user.username;
  var currentHexes: string = "";
  var updatedHexes: string = "";

  // RANDOM ==========================================================
  const getSavedRandom = async () => {
    try {
      const response = await Axios.post(
        "http://localhost:3001/getSavedRandom",
        {
          username: username,
        }
      );
      if (response.data[0].savedRandom == null) {
        updatedHexes = currentHexes;
      } else {
        updatedHexes = response.data[0].savedRandom + currentHexes;
      }
      console.log("after axios updatedHexes: " + updatedHexes);
      savedRandom();
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  // #1fa36c #74aa8b #982ac0 #724053 #982ac0 #724053 #1fa36c #74aa8b
  const savedRandom = async () => {
    try {
      const response = await Axios.post("http://localhost:3001/savedRandom", {
        hexes: updatedHexes,
        username: username,
      });
      console.log("RESPONSE savedRandom: " + response);
    } catch (error) {
      console.log("ERROR savedRandom: " + error);
    }
  };

  // RED ==========================================================
  const getSavedRed = async () => {
    try {
      const response = await Axios.post("http://localhost:3001/getSavedRed", {
        username: username,
      });
      if (response.data[0].savedRed == null) {
        updatedHexes = currentHexes;
      } else {
        updatedHexes = response.data[0].savedRed + currentHexes;
      }
      console.log("after axios updatedHexes: " + updatedHexes);
      savedRed();
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  const savedRed = async () => {
    try {
      const response = await Axios.post("http://localhost:3001/savedRed", {
        hexes: updatedHexes,
        username: username,
      });
      console.log("RESPONSE savedRed: " + response);
    } catch (error) {
      console.log("ERROR savedRed: " + error);
    }
  };

  // RED ==========================================================
  const getSavedGreen = async () => {
    try {
      const response = await Axios.post("http://localhost:3001/getSavedGreen", {
        username: username,
      });
      if (response.data[0].savedGreen == null) {
        updatedHexes = currentHexes;
      } else {
        updatedHexes = response.data[0].savedGreen + currentHexes;
      }
      console.log("after axios updatedHexes: " + updatedHexes);
      savedGreen();
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  const savedGreen = async () => {
    try {
      const response = await Axios.post("http://localhost:3001/savedGreen", {
        hexes: updatedHexes,
        username: username,
      });
      console.log("RESPONSE savedGreen: " + response);
    } catch (error) {
      console.log("ERROR savedGreen: " + error);
    }
  };

  // BLUE ==========================================================
  const getSavedBlue = async () => {
    try {
      const response = await Axios.post("http://localhost:3001/getSavedBlue", {
        username: username,
      });
      if (response.data[0].savedBlue == null) {
        updatedHexes = currentHexes;
      } else {
        updatedHexes = response.data[0].savedBlue + currentHexes;
      }
      console.log("after axios updatedHexes: " + updatedHexes);
      savedBlue();
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  const savedBlue = async () => {
    try {
      const response = await Axios.post("http://localhost:3001/savedBlue", {
        hexes: updatedHexes,
        username: username,
      });
      console.log("RESPONSE savedBlue: " + response);
    } catch (error) {
      console.log("ERROR savedBlue: " + error);
    }
  };

  /**
 * 
 * @returns a hex string
 * RED: hsl([0-60, 280-360], [10-100], [10-95])
   GREEN: hsl([60-170], [10-100], [10-95])
   BLUE: hsl([170-280], [10-100], [10-95])
 */
  function generateColour(arrPos: number): string {
    let saturation = getRandomInt(minSat, maxSat);
    let lightness = getRandomInt(minLight, maxLight);
    let hex = "hex value";

    if (colour == "random") {
      let hue = getRandomInt(minRand, maxRand);
      hex = hslToHex(hue, saturation, lightness);
    } else if (colour == "red") {
      let hue = Math.round(Math.random())
        ? getRandomInt(minRed1, maxRed1)
        : getRandomInt(minRed2, maxRed2);
      hex = hslToHex(hue, saturation, lightness);
    } else if (colour == "green") {
      let hue = getRandomInt(minGreen, maxGreen);
      hex = hslToHex(hue, saturation, lightness);
    } else {
      let hue = getRandomInt(minBlue, maxBlue);
      hex = hslToHex(hue, saturation, lightness);
    }
    currentHexes = currentHexes + hex + " ";
    return hex;
  }

  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  // function from https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex
  function hslToHex(h: number, s: number, l: number): string {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0"); // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

  return (
    <div
      className={ThemeStyles.outerFrame}
      style={{ border: "5px solid black", background: "#DD517E" }}
    >
      <h1 className={PaletteStyles.title}>{colour} palette</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={PaletteStyles.swatchContainer}>
          <Swatch hex={generateColour(0)} />
          <Swatch hex={generateColour(1)} />
          <Swatch hex={generateColour(2)} />
          <Swatch hex={generateColour(3)} />
        </div>

        <div className={PaletteStyles.returnContainer}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <button
              className={PaletteStyles.button}
              style={{
                color: "#E68E35",
                borderColor: "#E68E35",
              }}
              onClick={() => {
                if (colour == "random") {
                  getSavedRandom();
                } else if (colour == "red") {
                  getSavedRed();
                } else if (colour == "green") {
                  getSavedGreen();
                } else {
                  getSavedBlue();
                }
                playSaved();
              }}
            >
              Save
            </button>
          </motion.div>
          <div className={PaletteStyles.buttonGap} />
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <button
              className={PaletteStyles.button}
              style={{
                color: "#481D52",
                borderColor: "#481D52",
              }}
              onClick={() => {
                navigate("/home");
              }}
            >
              Return Home
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
