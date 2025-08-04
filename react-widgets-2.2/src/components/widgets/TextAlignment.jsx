import { useState } from "react";

export default function TextAlignment() {
  const [fontAlign, setFontAlign] = useState("left");

  return (
    <div style={{ padding: "32px" }}>
      <p
        style={{
          textAlign: fontAlign,
          border: "1px solid #ccc",
          padding: "16px",
        }}
      >
        Realignment Text
      </p>

      <div style={{ marginTop: "16px" }}>
        <button
          onClick={() => setFontAlign("left")}
          style={{ marginRight: "8px" }}
        >
          Left
        </button>
        <button
          onClick={() => setFontAlign("center")}
          style={{ marginRight: "8px" }}
        >
          Center
        </button>
        <button onClick={() => setFontAlign("right")}>Right</button>
      </div>
    </div>
  );
}
