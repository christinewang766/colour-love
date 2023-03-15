import Icon from "./icon.svg";
import styles from './styling/Home.module.css'
import React, { useState } from "react";
import DropDown from "./components/DropDown";

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

    // ==========================================================================
    return (
        <div style={{
            padding: '20px',
            height: '80%',
            width: '80%',
            background: '#DD517E',
            border: '5px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <img src={Icon} />
            <button className={styles.surpriseMe}>Surprise Me</button>
            <button
                className={styles.randomRGB}
                onClick={(): void => toggleDropDown()}
            >Random RGB</button>

// JUST FOR TESTING
            <div>{selectColour ? "Select: " + selectColour : "Select ..."} </div>
            {showDropDown && (
                <DropDown
                    colours={colours()}
                    showDropDown={false}
                    toggleDropDown={(): void => toggleDropDown()}
                    colourSelection={colourSelection}
                />
            )}

        </ div>
    )
}