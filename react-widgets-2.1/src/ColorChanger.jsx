import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("dodgerblue");
  const [input, setInput] = useState("");

  const handleUpdate = () => {
    if (input.trim()) {
      setColor(input.trim());
      setInput("");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ backgroundColor: color, color: "white", padding: "1rem" }}>
        {color}
      </h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a color"
        style={{ marginRight: "1rem", padding: "0.5rem" }}
      />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
