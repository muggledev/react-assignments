import Counter from "../widgets/Counter";

export default function CounterPage() {
  return (
    <div>
      <h2>Counter Widget</h2>
      <p>
        This widget is a simple counter that lets users increment, decrement, or
        reset the count. The count cannot go below 1, and it resets to 1 when
        the "Reset" button is clicked.
      </p>

      <Counter />
    </div>
  );
}
