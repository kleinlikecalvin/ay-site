import "./_styles.scss";
import Carousel from "@/components/Carousel";
import MissionBanner from "@/components/MissionBanner";
import IntroduceAY from "@/components/IntroduceAY";
import NeedHelp from "@/components/NeedHelp";
import Socials from "@/components/Socials";
import NewsletterSignUp from "@/components/NewsletterSignUp";

//CAROUSEL IMAGES
import spray from "@/graphics/about/about002.jpg";
import general from "@/graphics/home/home001.jpg";
import support from "@/graphics/home/support.jpg";
import volunteer from "@/graphics/about/about004.jpg";
export default function Home() {
  const slides = [
    {
      content: spray,
      desc: "Teens spray painting at our School's Out Party in 2022",
    },
    {
      content: general,
      desc: "A hand covered in paint making a peace sign next to finger painted letters 'AY'",
    },
    {
      content: support,
      desc: "AY Volunteer chatting with some kids while he gets them paint",
    },
    {
      content: volunteer,
      desc: "Volunteers from 2022 School's Out Party",
    },
    {
      content: volunteer,
      desc: "Volunteers from 2022 School's Out Party",
    },
  ];
  return (
    <div className="Home">
      <Carousel
        slides={slides}
        breakpoints={{
          "(min-width: 100px)": {
            slides: {
              perView: 1,
            },
          },
        }}
        page="home"
      />
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
