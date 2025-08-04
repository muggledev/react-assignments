import Clock from "../widgets/Clock";

export default function ClockPage() {
  return (
    <div>
      <h2>Clock Widget</h2>
      <p>
        This widget displays the current time and allows the user to
        mount/unmount the clock dynamically.
      </p>
      <Clock />
    </div>
  );
}
