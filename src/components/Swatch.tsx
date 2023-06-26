import { Alert } from "react-bootstrap";
import PaletteStyles from "../styling/Palette.module.css";
import { useState } from "react";

const Swatch = (props: { hex: string }) => {
  const [copy, setCopy] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "15px" }}>
      <div
        className={PaletteStyles.swatchBox}
        style={{ background: props.hex }}
        onClick={() => {
          navigator.clipboard.writeText(props.hex);
          setCopy(true);
        }}
      />
      <p
        className={PaletteStyles.swatchHex}
        onClick={() => {
          navigator.clipboard.writeText(props.hex);
          setCopy(true);
        }}
      >
        {props.hex}
      </p>
      <div
        onTransitionEnd={() => setCopy(false)}
        style={{
          opacity: copy ? "1" : "0",
          transition: copy
            ? "width 0.5s, height 0.5s, opacity 0.5s 0.5s"
            : "width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s",
          border: "3px solid black",
          background: "white",
          textAlign: "center", marginTop:'-10px'
        }}
      >
        Copied!
      </div>
    </div>
  );
};

export default Swatch;
