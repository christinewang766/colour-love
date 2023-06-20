import Icon from "../components/icon.svg";
import ThemeStyles from "../styling/Theme.module.css";
import { useState } from "react";
import DropDown from "../components/DropDown";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectColour, setSelectColour] = useState<string>("");
  const colours = () => {
    return ["Red", "Green", "Blue"];
  };

  /**
   * Toggle the drop down menu
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const colourSelection = (colour: string): void => {
    setSelectColour(colour);
  };

  const navigate = useNavigate();
  // ==========================================================================
  return (
    <div className={ThemeStyles.outerFrame}>
      <div
        style={{
          padding: "20px",
          height: "80%",
          width: "80%",
          background: "#DD517E",
          border: "5px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src={Icon} />
        <button className={ThemeStyles.button} style={{border: '5px solid #481D52'}} onClick={() => navigate('palette')}> Surprise Me
        </button>
        <button
          className={ThemeStyles.button}
          onClick={(): void => toggleDropDown()}
        >
          Random RGB
        </button>

        <div>{selectColour ? "Select: " + selectColour : "Select ..."} </div>
        {showDropDown && (
          <DropDown
            colours={colours()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            colourSelection={colourSelection}
          />
        )}
      </div>
    </div>
  );
}
