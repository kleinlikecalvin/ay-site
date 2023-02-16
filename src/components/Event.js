import "./Event.scss";
import "../_global_styling.scss";

export default function Event({
  classes,
  landingPage,
  imageSource,
  altText,
  header,
  blurb,
}) {
  return (
    <a className={"event " + classes} href={landingPage}>
      <img src={imageSource} alt={altText} width="300" height="300" />
      <div className="copy-cont">
        <h3>{header}</h3>
        <p>{blurb}</p>
        <p>Click for more details</p>
      </div>
    </a>
  );
}
