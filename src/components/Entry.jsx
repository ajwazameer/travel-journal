import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Entry(props) {
  return (
    <article className="FirstEntry">
      <img src={props.img.src} alt={props.img.alt}></img>
      <div className="box">
        <div className="location">
          <FontAwesomeIcon className="location-icon" icon={faLocationDot} />
          <span>{props.country.toUpperCase()}</span>
          <a href={props.googleMapsLink} alt="Google maps link">
            View on Google Maps
          </a>
        </div>
        <h1 className="heading">{props.title}</h1>
        <p className="date">{props.dates}</p>
        <p className="para">{props.text}</p>
      </div>
      <hr />
    </article>
  );
}
