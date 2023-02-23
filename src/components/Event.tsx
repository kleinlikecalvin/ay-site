import "./Event.scss";

type EventProps = {
  classes: string;
  landingPage: string;
  imageSource: string;
  altText: string;
  header: string;
  blurb: string;
};

export default function Event({
  classes,
  landingPage,
  imageSource,
  altText,
  header,
  blurb,
}: EventProps) {
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
