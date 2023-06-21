import { useSelector } from "react-redux";

const colourState = useSelector((state) => state);
const [minSat, maxSat, minLight, maxLight] = [10, 100, 10, 95];
const [minRed1, maxRed1, minRed2, maxRed2] = [0, 60, 280, 360];
const [minGreen, maxGreen] = [60, 170];
const [minBlue, maxBlue] = [170, 280];
const [minRand, maxRand] = [0, 359];

/**
 * 
 * @returns a hex string
 * RED: hsl([0-60, 280-360], [10-100], [10-95])
   GREEN: hsl([60-170], [10-100], [10-95])
   BLUE: hsl([170-280], [10-100], [10-95])
 */
function generateColour(): string {
  let saturation = getRandomInt(minSat, maxSat);
  let lightness = getRandomInt(minLight, maxLight);
  let hex = "hex value";
  if (colourState == "random") {
    let hue = getRandomInt(minRand, maxRand);
    hex = hslToHex(hue, saturation, lightness);
  } else if (colourState == "red") {
    let hue = Math.round(Math.random())
      ? getRandomInt(minRed1, maxRed1)
      : getRandomInt(minRed2, maxRed2);
    hex = hslToHex(hue, saturation, lightness);
  } else if (colourState == "green") {
    let hue = getRandomInt(minGreen, maxGreen);
    hex = hslToHex(hue, saturation, lightness);
  } else {
    let hue = getRandomInt(minBlue, maxBlue);
    hex = hslToHex(hue, saturation, lightness);
  }
  return hex;
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// function from https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex
function hslToHex(h: number, s: number, l: number): string {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export default generateColour;
