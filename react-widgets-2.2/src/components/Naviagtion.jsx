import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav-bar">
      <ul>
        {/* <li>
          <Link to="/">Dashboard</Link>
        </li> */}
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
    </nav>
  );
}
