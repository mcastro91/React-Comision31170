import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

  const handleOnClick = (path) => {
    window.open(path, "_blank")
  }

  return (
    <footer>
      <p>© 2022 Mario Castro</p>
      <ul className="redes">
        <li>
          <FontAwesomeIcon icon={faInstagram} size="xl" onClick={() => handleOnClick("https://www.instagram.com/")} />
        </li>
        <li>
          <FontAwesomeIcon icon={faFacebook} size="xl" onClick={() => handleOnClick("https://www.facebook.com/")} />
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitter} size="xl" onClick={() => handleOnClick("https://www.twitter.com/")} />
        </li>
        <li>
          <FontAwesomeIcon icon={faWhatsapp} size="xl" onClick={() => handleOnClick("https://web.whatsapp.com/")} />
        </li>
      </ul>
    </footer>
  );
}
