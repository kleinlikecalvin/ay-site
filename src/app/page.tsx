import Image from "next/image";
import "./_styles.scss";
import landingBanner from "@/graphics/homepageLandingBanner.png";
import MissionBanner from "@/components/MissionBanner";
import IntroduceAY from "@/components/IntroduceAY";
import NeedHelp from "@/components/NeedHelp";
import Socials from "@/components/Socials";
import NewsletterSignUp from "@/components/NewsletterSignUp";

export default function Home() {
  return (
    <div className="Home">
      <Image
        className="landing-banner"
        src={landingBanner}
        width={1440}
        height={400}
        alt="Anaheim Youtopia full logo graphic with a colorful character jumping with excitement"
      />
      <hr />
      <MissionBanner />
      <hr />
      <IntroduceAY />
      <NeedHelp />
      <div className="socials-cont">
        <Socials />
        <NewsletterSignUp />
      </div>
    </div>
  );
}
