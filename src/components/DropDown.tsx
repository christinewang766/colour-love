import { useEffect, useState } from "react";
import ThemeStyles from "../styling/Theme.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { red, green, blue } from "../components/redux/colourSlice";

type DropDownProps = {
  colours: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
};

const DropDown = ({ colours }: DropDownProps) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  function onHover(e: any) {
    if (e.target.id == "red") e.target.style.background = "red";
    else if (e.target.id == "green") e.target.style.background = "#39ff14";
    else if (e.target.id == "blue") e.target.style.background = "cyan";
  }

  function onLeave(e) {
    e.target.style.background = "white";
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
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
              // dispatch
              if(colour == "red"){
                dispatch(red());
              } else if (colour == "green"){
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
