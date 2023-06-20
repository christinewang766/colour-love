import ThemeStyles from "../styling/Theme.module.css";
import PaletteStyles from "../styling/Palette.module.css";
import { useNavigate } from "react-router-dom";


export function Palette() {
    const navigate = useNavigate();

    return (
        <div className={ThemeStyles.outerFrame} style={{border:'0', background:'#DD517E'}}>
            <div>contains both swatch and return buttons
            <div className={PaletteStyles.paletteContainer}>
                <div style={{}}>swatch and hex container x4
                <div className={PaletteStyles.swatchBox} />
                <div className={PaletteStyles.swatchHex} />
                </div>
            </div>  
            <div className={PaletteStyles.returnContainer}>
                <button className={ThemeStyles.button}
                style={{color: '#E68E35', borderColor:'#E68E35'}}>Save Palette</button>
                <button className={ThemeStyles.button} 
                style={{color: '#481D52', borderColor:'#481D52'}}
                onClick={() => navigate('/')}>Return Home</button>
            </div>
            </div>
        </div>
    )
}