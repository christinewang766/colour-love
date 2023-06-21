import PaletteStyles from "../styling/Palette.module.css";


const Swatch = ({ hex }: string) => {
  
    return (
        <div style={{display:'flex', flexDirection:'column', padding:'15px'}}>
        <div className={PaletteStyles.swatchBox} />
        <p className={PaletteStyles.swatchHex}>{hex}</p>
        </div>
    );
  };
  
  export default Swatch;
  