import "./_IntroduceAY.scss";
import purpleMail from "@/graphics/home/homePurpleMail.png";
import anaheimA from "@/graphics/home/homeAIcon.png";
import coinPurse from "@/graphics/home/homeCoinPurse.png";
import Image from "next/image";

export default function IntroduceAY() {
  return (
    <div className="IntroduceAY">
      <section>
        <Image src={anaheimA} alt="The letter A to represent Anaheim" />
        <h3>Made by Anaheimers</h3>
        <p>
          Our founders grew up here, in Anaheim, and live here. Together, we
          work for the disadvantaged youth, the kids that we used to be.
        </p>
      </section>
      <section>
        <a
          href="http://eepurl.com/hzIr2X"
          target={"_blank"}
          className="subscribe"
          rel="noreferrer"
        >
          <Image
            src={purpleMail}
            alt="Cartoon envelope with a visible hand pointing one finger towards the center indicating that a click action is to be performed in order to sign up for the Anaheim Youtopia monthly newsletter"
          />
          <h3>Get our monthly newsletter</h3>
        </a>
        <p>
          At the end of each month we send out a newsletter highlighting Anaheim
          Youtopia activities and other fun stuff! Sign up today by clicking the
          icon above to stay up to date on things like grant contents and
          community events.
        </p>
      </section>
      <section>
        <Image
          src={coinPurse}
          alt="A small coin purse drawing used to suggest that Anaheim Youtopia is inexpensive for participants"
        />
        <h3>Low To No Cost</h3>
        <p>
          When we were young, we couldn't afford to do much, so all of our
          meets, events, and initiatives are FREE or nearly free!
        </p>
      </section>
    </div>
  );
}
