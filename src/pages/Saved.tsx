// @ts-ignore
import ThemeStyles from "../styling/Theme.module.css";
// @ts-ignore
import PaletteStyles from "../styling/Palette.module.css";
// @ts-ignore
import SavedStyles from "../styling/Saved.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../components/redux/userSlice";
import { ImBin, ImExit } from "react-icons/im";
import Axios from "axios";
import { motion } from "framer-motion";
import SimplePalette from "../components/SimplePalette";

/** SHOWS USER'S PREVIOUSLY SAVED {random, red, green, blue} PALETTES */
export function Saved() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  // @ts-ignore
  var username = user.username;

  const [showRandom, setShowRandom] = useState(false);
  const [showRed, setShowRed] = useState(false);
  const [showGreen, setShowGreen] = useState(false);
  const [showBlue, setShowBlue] = useState(false);
  // const [index, setIndex] = useState(-1);
  const [groupedPalettes, setGroupPalettes] = useState<string[][]>([]);
  // const [temp, setTemp] = useState("");

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
      if (response.data[0].savedRandom !== null) {
        getPalettesHexes(response.data[0].savedRandom);
      }
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  /** UPDATE: user's savedRandom data */
  // const savedRandom = async (hexes: string) => {
  //   try {
  //     const response = await Axios.post("http://localhost:3001/savedRandom", {
  //       hexes: hexes,
  //       username: username,
  //     });
  //     console.log("RESPONSE savedRandom: " + response);
  //   } catch (error) {
  //     console.log("ERROR savedRandom: " + error);
  //   }
  // };

  /** RED *********************************************************** */
  /** RETRIEVE: user's savedRed data */
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

  /** UPDATE: user's savedRed data */
  // const savedRed = async (hexes: string) => {
  //   try {
  //     const response = await Axios.post("http://localhost:3001/savedRed", {
  //       hexes: hexes,
  //       username: username,
  //     });
  //     console.log("RESPONSE savedRed: " + response);
  //   } catch (error) {
  //     console.log("ERROR savedRed: " + error);
  //   }
  // };

  /** GREEN *********************************************************** */
  /** RETRIEVE: user's savedGreen data */
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

  /** UPDATE: user's savedGreen data */
  // const savedGreen = async (hexes: string) => {
  //   try {
  //     const response = await Axios.post("http://localhost:3001/savedGreen", {
  //       hexes: hexes,
  //       username: username,
  //     });
  //     console.log("RESPONSE savedGreen: " + response);
  //   } catch (error) {
  //     console.log("ERROR savedGreen: " + error);
  //   }
  // };

  /** BLUE *********************************************************** */
  /** RETRIEVE: user's savedBlue data */
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

  /** UPDATE: user's savedBlue data */
  // const savedBlue = async (hexes: string) => {
  //   try {
  //     const response = await Axios.post("http://localhost:3001/savedBlue", {
  //       hexes: hexes,
  //       username: username,
  //     });
  //     console.log("RESPONSE savedBlue: " + response);
  //   } catch (error) {
  //     console.log("ERROR savedBlue: " + error);
  //   }
  // };

  /**
   * @param {string} hexes: retrieved hexes data from MYSQL
   * reorganizes retrieved hex string into string[][]
   * where each element is an array of 4 hexes
   * saved in groupedPalettes
   */
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

  /** DETECTS INDEX CHANGE: set temp hexes to be all hexes EXCEPT 'deleted' */
  // useEffect(() => {
  //   async function func1() {
  //     let tempGPalettes: string[][] = [];
  //     for (let i = 0; i < groupedPalettes.length; i++) {
  //       if (i !== index) {
  //         tempGPalettes.push(groupedPalettes[i]);
  //       }
  //     }
  //     setTemp(tempGPalettes.join().split(",").join(" ") + " ");
  //   }
  //   if (index !== -1) {
  //     func1();
  //   }
  // }, [index]);

  // /** DETECTS TEMP CHANGE: update MYSQL {random, red, green, blue} to be temp hexes */
  // useEffect(() => {
  //   console.log("temp: " + temp);
  //   async function func2() {
  //     if (showRandom) {
  //       savedRandom(temp);
  //     }
  //     if (showRed) {
  //       savedRed(temp);
  //     }
  //     if (showGreen) {
  //       savedGreen(temp);
  //     }
  //     if (showBlue) {
  //       savedBlue(temp);
  //     }
  //   }
  //   if (temp !== "" && temp !== " ") {
  //     func2();
  //     setTemp("");
  //   }
  //   setIndex(-1);
  // }, [temp]);

  /** *************************************************************************** */

  return (
    /** OUTER FRAME */

    <div className={ThemeStyles.outerFrame} style={{ background: "#DD517E" }}>
      {/** EXIT: return to generate palettes and view saved page */}
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

      {/** INNER FRAME */}

      <div className={SavedStyles.innerFrame}>
        {/** TITLE SPECIFIES USER'S SAVED */}

        <h6 className={PaletteStyles.title}>{username}'s saved</h6>

        {/** RANDOM BUTTON: shows saved random palettes */}

        <motion.div
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div
            className={SavedStyles.category}
            onClick={() => {
              setGroupPalettes([]);
              setShowRed(false);
              setShowGreen(false);
              setShowBlue(false);
              setShowRandom(!showRandom);
              getSavedRandom();
              console.log(showRandom);
            }}
          >
            random
          </div>
        </motion.div>
        {showRandom &&
          groupedPalettes.map((pal, i) => {
            return (
              <div key={i}>
                <SimplePalette hexes={pal} />
                {/* <button
                  style={{ background: "none", border: "none" }}
                  onClick={() => {
                    setIndex(i);
                  }}
                >
                  <ImBin /> delete
                </button> */}

                <hr style={{ color: "#481D52" }} />
              </div>
            );
          })}

        {/** RED BUTTON: shows saved red palettes */}

        <motion.div
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
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
        </motion.div>
        {showRed &&
          groupedPalettes.map((pal, i) => {
            return (
              <div key={i}>
                <SimplePalette hexes={pal} />
                {/* <button
                  style={{ background: "none", border: "none" }}
                  onClick={() => {
                    setIndex(i);
                  }}
                >
                  <ImBin /> delete
                </button> */}
                <hr style={{ color: "#481D52" }} />
              </div>
            );
          })}
        <motion.div
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {/** GREEN BUTTON: shows saved green palettes */}

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
        </motion.div>
        {showGreen &&
          groupedPalettes.map((pal, i) => {
            return (
              <div key={i}>
                <SimplePalette hexes={pal} />
                {/* <button
                  style={{ background: "none", border: "none" }}
                  onClick={() => {
                    setIndex(i);
                  }}
                >
                  <ImBin /> delete
                </button> */}
                <hr style={{ color: "#481D52" }} />
              </div>
            );
          })}

        {/** BLUE BUTTON: shows saved blue palettes */}

        <motion.div
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
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
        </motion.div>
        {showBlue &&
          groupedPalettes.map((pal, i) => {
            return (
              <div key={i}>
                <SimplePalette hexes={pal} />
                {/* <button
                  style={{ background: "none", border: "none" }}
                  onClick={() => {
                    setIndex(i);
                  }}
                >
                  <ImBin /> delete
                </button> */}
                <hr style={{ color: "#481D52" }} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Saved;
