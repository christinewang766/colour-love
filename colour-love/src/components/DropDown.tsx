import React, { useEffect, useState } from 'react';
import styles from '../styling/Home.module.css'


type DropDownProps = {
  colours: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  colourSelection: Function;
};

const DropDown = ({
  colours,
  colourSelection,
}: DropDownProps) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const onClickHandler = (colour: string): void => {
    colourSelection(colour);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  function onHover(e:any) {
    if(e.target.id == "Red")
    e.target.style.background = 'red';
    else if(e.target.id == "Green")
    e.target.style.background = '#39ff14';
    else if(e.target.id == "Blue")
    e.target.style.background = 'cyan';
  }

  function onLeave(e) {
    e.target.style.background = 'white';
  }

  
  return (
    <>
      {colours.map(
        (colour: string, index: number) => {
          return (
            <p className={styles.dropDown}
              key={index}
              id={colour}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              onClick={(): void => {
                onClickHandler(colour);
              }}
            >
              {colour}
            </p>
          );
        }
      )}
    </>
  );
};

export default DropDown;
