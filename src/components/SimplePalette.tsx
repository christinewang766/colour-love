// @ts-ignore
import SavedStyles from "../styling/Saved.module.css";

/** INDIVIDUAL SWATCH {box, #hex} IN THE SAVED PALETTES */
export function SimplePalette(props: { hexes: string[] }) {
  function SimpleSwatchBox(props: { hex: string }) {
    return (
      /** COLOURED BOX */
      <div
        style={{
          background: props.hex,
          display: "flex",
          justifyContent: "center",
          width: "25%",
          height: "100%",
          border: "3px solid #fcf7f3",
        }}
      >
        {/* HEX TEXT */}
        <p className={SavedStyles.swatchText}>{props.hex}</p>
      </div>
    );
  }

  /** *************************************************************************** */

  return (
    /** CONTAINER FOR PALETTE */
    <div style={{ height: "15%", marginTop: "10px", display: "flex" }}>
      <SimpleSwatchBox hex={props.hexes[0]} />
      <SimpleSwatchBox hex={props.hexes[1]} />
      <SimpleSwatchBox hex={props.hexes[2]} />
      <SimpleSwatchBox hex={props.hexes[3]} />
    </div>
  );
}

export default SimplePalette;
