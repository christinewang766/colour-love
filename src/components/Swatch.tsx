import PaletteStyles from "../styling/Palette.module.css";


const Swatch = (props: {hex:string}) => {  
    return (
        <div style={{display:'flex', flexDirection:'column', padding:'15px'}}>
        <div className={PaletteStyles.swatchBox} style={{background:props.hex}} />
        <p className={PaletteStyles.swatchHex}>{props.hex}</p>
        </div>
    );
  };
  
  export default Swatch;
  