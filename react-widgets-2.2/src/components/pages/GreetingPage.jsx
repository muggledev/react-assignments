import Greeting from "../widgets/Greeting";

export default function GreetingPage() {
  return (
    <div>
      <h2>Greeting Widget</h2>
      <p>
        This widget displays a greeting that toggles between "Hello" and
        "Goodbye" each time the button is clicked.
      </p>
      <Greeting />
    </div>
  );
}
