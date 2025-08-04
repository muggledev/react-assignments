import { useState } from "react";

export default function RGBSlider() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const boxStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    marginBottom: "1rem",
    border: "1px solid #000",
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <div style={boxStyle}></div>

      <p>
        RGB: <strong>{red}</strong>, <strong>{green}</strong>,{" "}
        <strong>{blue}</strong>
      </p>

      <div>
        <label>
          Red: {red}
          <br />
          <input
            type="range"
            min="0"
            max="255"
            value={red}
            onChange={(e) => setRed(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          Green: {green}
          <br />
          <input
            type="range"
            min="0"
            max="255"
            value={green}
            onChange={(e) => setGreen(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          Blue: {blue}
          <br />
          <input
            type="range"
            min="0"
            max="255"
            value={blue}
            onChange={(e) => setBlue(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
}
