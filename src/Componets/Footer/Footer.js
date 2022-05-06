import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer id="footer">
      <p className="p-footer">© 2022 Mario Castro</p>
      <ul className="redes">
        <li>
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </li>
        <li>
          <FontAwesomeIcon icon={faFacebook} size="xl" />
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitter} size="xl" />
        </li>
        <li>
          <FontAwesomeIcon icon={faWhatsapp} size="xl" />
        </li>
      </ul>
    </footer>
  );
}
