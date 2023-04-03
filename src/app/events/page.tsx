import "./_styles.scss";
import Event from "@/components/Event";
import blackSmiley from "@/graphics/blackSmiley.png";

export default function Events() {
  // Event(classes, landingPage, imageSource, altText, header, blurb)
  return (
    <div className="Events">
      <Event
        classes=""
        landingPage="www.anaheimYoutopia.com/artContest"
        imageSource={blackSmiley}
        altText="black smiley"
        header="Anaheim Youtopia Annual Art Contest"
        blurb="Enter to win a cash prize and show off your talents in our public exhibit"
      />
    </div>
  );
}
