
export function SimplePalette(props: { hexes: string[] }) {

    function SimpleSwatchBox(props: { hex: string })  {
        return (
            <div style={{background: props.hex, display:"flex", justifyContent:"center", width:"25%", height:"100%", border:"3px solid #fcf7f3"}}>
            <p style={{textAlign:"center", fontStyle:"italic", color:"white", letterSpacing:"2px", fontFamily:"monospace", fontWeight:"bolder",  textShadow:"-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>{props.hex}</p>
            </div>
        )
    }

  // ==========================================================================
  return (
    /** container for palette */
    <div style={{background:"white", height:"15%", marginTop:"10px", display:"flex"}}>
        <SimpleSwatchBox hex={props.hexes[0]}/>
        <SimpleSwatchBox hex={props.hexes[1]} />
        <SimpleSwatchBox hex={props.hexes[2]} />
        <SimpleSwatchBox hex={props.hexes[3]} />
    </div>
  );
}

export default SimplePalette;
