import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Widget Dashboard</h1>
      <ul>
        <li>
          <Link to="/clock">Clock</Link>
        </li>
        <li>
          <Link to="/color-changer">Color Changer</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/font-sizer">Font Sizer</Link>
        </li>
        <li>
          <Link to="/greeting">Greeting</Link>
        </li>
        <li>
          <Link to="/hide">Hide</Link>
        </li>
        <li>
          <Link to="/rgb-slider">RGB Slider</Link>
        </li>
        <li>
          <Link to="/text-alignment">Text Alignment</Link>
        </li>
      </ul>
    </div>
  );
}
