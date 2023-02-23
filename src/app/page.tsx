import "./styles.scss";
import MissionBanner from "@/components/MissionBanner";
import IntroduceAY from "@/components/IntroduceAY";
import NeedHelp from "@/components/NeedHelp";
import Socials from "@/components/Socials";
import NewsletterSignUp from "@/components/NewsletterSignUp";

export default function Home() {
  return (
    <div className="Home">
      <div
        className="landing-banner"
        aria-label={
          "Anaheim Youtopia full logo graphic with a colorful character jumping with excitement"
        }
      />
      <MissionBanner />
      <IntroduceAY />
      <NeedHelp />
      <div className="socials-cont">
        <Socials />
        <NewsletterSignUp />
      </div>
    </div>
  );
}
