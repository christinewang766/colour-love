// @ts-ignore
import ThemeStyles from "../styling/Theme.module.css";
// @ts-ignore
import PaletteStyles from "../styling/Palette.module.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../components/redux/userSlice";
import { motion } from "framer-motion";
import Swatch from "../components/Swatch";
import useSound from "use-sound";
// @ts-ignore
import Saved from "../components/music/saved.mp3";

export function Palette() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  // @ts-ignore
  var username = user.username;
  // @ts-ignore
  const { colour } = useSelector((state) => state.colour);
  const [playSaved] = useSound(Saved);
  const [minSat, maxSat, minLight, maxLight] = [10, 100, 10, 95];
  const [minRed1, maxRed1, minRed2, maxRed2] = [0, 60, 280, 360];
  const [minGreen, maxGreen] = [60, 170];
  const [minBlue, maxBlue] = [170, 280];
  const [minRand, maxRand] = [0, 359];

  var currentHexes: string = "";
  var updatedHexes: string = "";

  /**
 * @returns {string} hex value
 * RED: hsl([0-60, 280-360], [10-100], [10-95])
   GREEN: hsl([60-170], [10-100], [10-95])
   BLUE: hsl([170-280], [10-100], [10-95])
 */
  function generateColour(): string {
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

  /**
   * @prop {number} min: the minimum range
   * @prop {number} max: the maximum range
   * generates a random number between [min, max]
   * */
  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  /**
   * @prop {number} h: hue
   * @prop {number} s: saturation
   * @prop {number} l: lightness
   * @returns {string} hex value
   * converts an hsl colour value into a string hex code
   * from https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex */
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

  /** ========================= SERVER MYSQL CONNECTION ========================= */

  /** RANDOM *********************************************************** */
  /** RETRIEVE: user's savedRandom data */
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

  /** UPDATE: user's savedRandom data */
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

  /** RED *********************************************************** */
  /** RETRIEVE: user's savedRed data */
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

  /** UPDATE: user's savedRed data */
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

  /** GREEN *********************************************************** */
  /** RETRIEVE: user's savedGreen data */
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

  /** UPDATE: user's savedGreen data */
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

  /** BLUE *********************************************************** */
  /** RETRIEVE: user's savedBlue data */
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

  /** UPDATE: user's savedBlue data */
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

  /** *************************************************************************** */

  return (
    /** OUTER FRAME */
    <div
      className={PaletteStyles.outerFrame}
      style={{ border: "5px solid black", background: "#DD517E" }}
    >
      {/** TITLE: specifies {random, red, green, blue} palette generated */}

      <h1 className={PaletteStyles.title}>{colour} palette</h1>

      {/** CONTAINS: swatch container and buttons */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/** CONTAINS: all four swatches */}

        <div className={PaletteStyles.swatchContainer}>
          <Swatch hex={generateColour()} />
          <Swatch hex={generateColour()} />
          <Swatch hex={generateColour()} />
          <Swatch hex={generateColour()} />
        </div>

        {/** CONTAINS: buttons */}

        <div className={PaletteStyles.returnContainer}>
          {/** SAVE BUTTON: saves generated palette to MYSQL */}

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

            {/** HOME BUTTON: directs back to {surprise me, RGB button} home page */}
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
