import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

function Footer(props) {
  return (
    <footer>
      <div className="copyright">
        <p>Copyright</p>
      </div>
      <div className="name">
        <FontAwesomeIcon icon={faCopyright} />
        <p>2025 Rachelle Hooley</p>
      </div>
    </footer>
  );
}

export default Footer;
