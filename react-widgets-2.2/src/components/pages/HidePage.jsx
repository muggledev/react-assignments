import Hide from "../widgets/Hide";

export default function HidePage() {
  return (
    <div>
      <h2>Hide Widget</h2>
      <p>
        This widget allows users to toggle the visibility of a message by
        clicking a button. The text "Hide Me" appears or disappears based on the
        current state.
      </p>
      <Hide />
    </div>
  );
}
