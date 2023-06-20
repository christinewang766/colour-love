import { useEffect, useState } from 'react';
import ThemeStyles from '../styling/Theme.module.css'
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();
  
  return (
    <>
      {colours.map(
        (colour: string, index: number) => {
          return (
            <p className={ThemeStyles.button}
            style={{width: '120px', margin: '0', height: 'auto'}}
              key={index}
              id={colour}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              onClick={(): void => {
                colourSelection(colour);
                navigate('palette');
              }}
            >
              {/* <Link to="/palette"/> */}
              {colour}
            </p>
          );
        }
      )}
    </>
  );
};

export default DropDown;
