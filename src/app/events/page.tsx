import "./styles.scss";
import Event from "@/components/Event";
import blackSmiley from "@/graphics/blackSmiley.png";

export default function Events() {
  // School's Out
  // VAPA
  // Annual Art Contest & Exhibit
  // Kids Play Day
  // Event(landingPage,imageSource, altText, header, blurb)
  return (
    <div className="Events">
      <Event
        landingPage="www.anaheimYoutopia.com/communityEvents"
        imageSource={blackSmiley}
        altText="black smiley"
        header="Community Events"
        blurb="We hold a variety of community events throughout the year"
      />
      <Event
        classes="reverse"
        landingPage="www.anaheimYoutopia.com/schoolsOut"
        imageSource={blackSmiley}
        altText="black smiley"
        header="School's Out Party"
        blurb="Join us for an afternoon of good times, good food, and good music to celebrate the end of another school year"
      />
      <Event
        landingPage="www.anaheimYoutopia.com/artContest"
        imageSource={blackSmiley}
        altText="black smiley"
        header="Anaheim Youtopia Annual Art Contest"
        blurb="Enter to win a cash prize and show of your talents in our public exhibit"
      />
    </div>
  );
}
