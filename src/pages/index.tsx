import styles from "./index.module.css";
import MissionBanner from "../components/MissionBanner";
import IntroduceAY from "../components/IntroduceAY";
import NeedHelp from "../components/NeedHelp";
import Socials from "../components/Socials";
import NewsletterSignUp from "../components/NewsletterSignUp";

//Need to set up routes so I can fix links to relative pages in NeedHelp()
// Anything that isn't reused on another page doesn't need to be put into a component
/**
 * Double check:
 *  -MissionBanner
 *  -IntroduceAy
 *  -NeedHelp
 */
export default function Home() {
  return (
    <div className="Home">
      <div
        className={styles.homepageLandingBanner}
        aria-label={
          "Anaheim Youtopia full logo graphic with a colorful character jumping with excitement"
        }
      />
      <MissionBanner />
      <IntroduceAY />
      <NeedHelp />
      <div className={styles.socialsCont}>
        <Socials />
        <NewsletterSignUp />
      </div>
    </div>
  );
}
