import Image from "next/image";
import "./_styles.scss";
import "@/app/_global.scss";
import SwiperCarousel from "@/components/SwiperCarousel";
import MissonBanner from "@/components/MissionBanner";
import nikkiKleinHeadshot from "@/graphics/nikkiKleinHeadshot.jpg";
import quoteIcon from "@/graphics/quoteIcon.png";

export default function AboutUs() {
  return (
    <div className="AboutUs">
      <h1>
        <span className="purple">Hello</span> and{" "}
        <span className="orange">Welcome</span>
      </h1>
      <SwiperCarousel />
      <MissonBanner />
      <section className="support-section">
        <h3>
          Why do we choose to <span className="orange">support</span> Anaheim
          youth?
        </h3>
        Disadvantaged youth are more likely to:
        <ul>
          <li>Have sex before age 16</li>
          <li>Join a gang</li>
          <li>Attack someone or get into a fight</li>
          <li>Steal something worth more than 50 dollars run away</li>
          <li>Start school with limited language skills</li>
          <li>Have less parental support with homework</li>
          <li>
            Deal with more emotional and social problems that interfere with
            learning
          </li>
        </ul>
      </section>
      <section className="topia-banner">
        Fun fact: the word “topia” is believed to originate from ancient Greece.
        It can be translated as “place” or “a place with specified
        characteristics.” So, quite literally, Anaheim Youtopia means this is
        <span className="orange">your</span> place!
      </section>
      <section className="empower-section">
        <h3>
          Why do we choose to <span className="orange">empower</span> Anaheim
          youth?
        </h3>
        <ul>
          <li>Improve social skills</li>
          <li>Improve behavior</li>
          <li>Increase academic achievement</li>
          <li>Increase self-esteem</li>
          <li>Increase self-efficacy</li>
          <li>Higher rates of successful transitions into adulthood</li>
        </ul>
      </section>
      <section className="community-section">
        <h3>
          Why do we choose to <span className="orange">build community</span>{" "}
          with Anaheim youth?
        </h3>
        <ul>
          <li>
            Research definitively shows that youth who have sufficient support
            from their families, schools, and communities develop the assets
            necessary to do well in life
          </li>
          <li>
            The need for love and belonging are part of our basic needs as human
            beings
          </li>
          <li>Networking</li>
          <li>More opportunities to practice conflict resolution skills</li>
          <li>Offers new perspectives</li>
        </ul>
      </section>
      <section className="note-section">
        <p>
          At Anaheim Youtopia, we believe community is what{" "}
          <span className="orange">you</span> make it. We also believe that
          community doesn&apos;t begin and end with our organization. We want
          our teens to know that they are a part of this city, that they can use
          their voices, and they can learn where to find invitations to
          participate even more. We want to help them influence the world around
          them to be a more inclusive and considerate place for all of its
          residents to thrive. Because there are so many different people with
          different stories and interesting contributions to be offered here in
          Anaheim.
        </p>
        <div>
          <Image
            src={nikkiKleinHeadshot}
            alt="Anaheim Youtopia Director, Nikki Klein"
            width={221}
          />
          <p>
            Moving forward, we invite you to join us in any way that you can.
            Anaheim Youtopia is our way to build real community, to bridge real
            gaps, to support each other, to socialize, to learn, to grow, and to
            empower. You can check out our opportunities page to learn about our
            volunteer neeads! We’re also always looking for partners, sponsors,
            and welcome donations of all kinds. So, join us as we move forward
            with love, Anaheim Youtopia isn&apos;t much without{" "}
            <span className="orange">you</span>.
          </p>
        </div>
        <p> -Nikki Klein, Anaheim Youtopia Director</p>
      </section>
      <section className="quote-section">
        <Image
          src={quoteIcon}
          alt="two characters reaching towards eachother with a heart shaped world between them"
          width={350}
        />
        <em>
          &quot;Life has taught us that love does not consist in gazing at each
          other but in the looking outward together in the same direction.&quot;
          - Antoine de Saint-Exupéry
        </em>
      </section>
    </div>
  );
}
