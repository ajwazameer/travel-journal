import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header() {
  return (
    <header>
      <nav>
        <FontAwesomeIcon className="earth-icon" icon={faEarthEurope} />
        <h1>my travel journal.</h1>
      </nav>
    </header>
  );
}
