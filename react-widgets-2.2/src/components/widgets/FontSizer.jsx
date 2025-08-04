import { useState } from "react";

export default function FontSizer() {
  const [fontSize, setFontSize] = useState(20);

  const grow = () => {
    setFontSize((prev) => Math.min(prev + 5, 100));
  };

  const shrink = () => {
    setFontSize((prev) => Math.max(prev - 5, 0));
  };

  return (
    <div style={{ padding: "32px" }}>
      <h2 style={{ fontSize: `${fontSize}px` }}>Resizable Text</h2>
      <button
        onClick={grow}
        style={{ marginRight: "16px", padding: "5px 10px" }}
      >
        Grow
      </button>
      <button onClick={shrink} style={{ padding: "5px 12px" }}>
        Shrink
      </button>
      <p style={{ marginTop: "16px", color: "gray" }}>
        Font size: {fontSize}px (Min: 0, Max: 100)
      </p>
    </div>
  );
}
