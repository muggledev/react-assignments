import TextAlignment from "../widgets/TextAlignment";

export default function TextAlignmentPage() {
  return (
    <div>
      <h2>Text Alignment Widget</h2>
      <p>
        This widget allows users to change the alignment of a text block by
        clicking "Left", "Center", or "Right" buttons. The text updates in real
        time to reflect the selected alignment.
      </p>
      <TextAlignment />
    </div>
  );
}
