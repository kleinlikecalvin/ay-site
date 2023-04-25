import "./_styles.scss";
import Carousel from "@/components/Carousel";
import MissionBanner from "@/components/MissionBanner";
import IntroduceAY from "@/components/IntroduceAY";
import NeedHelp from "@/components/NeedHelp";
import Socials from "@/components/Socials";
import NewsletterSignUp from "@/components/NewsletterSignUp";

export default function Home() {
  return (
    <div className="Home">
      <Carousel />
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
