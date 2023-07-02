// @ts-ignore
import ThemeStyles from "../styling/Theme.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { red, green, blue } from "../components/redux/colourSlice";
import { useEffect, useState } from "react";

type DropDownProps = {
  colours: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
};

/** HOMEPAGE DROPDOWN: shows the {red, green, blue} colour palette options */
const DropDown = ({ colours }: DropDownProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  /** buttons are highlighted their respective colours onHover, else white */
  function onHover(e: any) {
    if (e.target.id == "red") e.target.style.background = "red";
    else if (e.target.id == "green") e.target.style.background = "#39ff14";
    else if (e.target.id == "blue") e.target.style.background = "cyan";
  }
  // @ts-ignore
  function onLeave(e) {
    e.target.style.background = "white";
  }

  /** *************************************************************************** */

  return (
    <>
    {/** FOR EACH {red, blue, green}: handle action and button appearance */}
      {colours.map((colour: string, index: number) => {
        return (
          <p
            className={ThemeStyles.button}
            style={{ width: "80px", margin: "0", height: "auto" }}
            key={index}
            id={colour}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={(): void => {
              if (colour == "red") {
                dispatch(red());
              } else if (colour == "green") {
                dispatch(green());
              } else {
                dispatch(blue());
              }
              navigate("palette");
            }}
          >
            {colour}
          </p>
        );
      })}
    </>
  );
};

export default DropDown;
