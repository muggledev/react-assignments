import FontSizer from "../widgets/FontSizer";

export default function FontSizerPage() {
  return (
    <div>
      <h2>Font Sizer Widget</h2>
      <p>
        This widget lets users increase or decrease the size of the text using
        "Grow" and "Shrink" buttons. The font size is limited between 0 and 100
        pixels and updates dynamically as you click.
      </p>
      <FontSizer />
    </div>
  );
}
