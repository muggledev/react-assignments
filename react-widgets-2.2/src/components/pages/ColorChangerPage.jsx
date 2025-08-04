import ColorChanger from "../widgets/ColorChanger";

export default function ColorChangerPage() {
  return (
    <div>
      <h2>Color Changer Widget</h2>
      <p>
        This widget allows users to change the background color of the heading
        by entering a valid color name or hex code. Type a color into the input
        field and click "Update" to see the color change in real time.
      </p>
      <ColorChanger />
    </div>
  );
}
