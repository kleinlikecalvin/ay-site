import "./_styles.scss";
import Carousel from "@/components/Carousel";
import MissionBanner from "@/components/MissionBanner";
import IntroduceAY from "@/components/IntroduceAY";
import NeedHelp from "@/components/NeedHelp";
import Socials from "@/components/Socials";
import NewsletterSignUp from "@/components/NewsletterSignUp";

import spray from "@/graphics/about/kidsPaintingAtSchoolsOut22.jpg";
import ayFinger from "@/graphics/about/ayFingerPaint22.jpg";
import kidsPlayDay from "@/graphics/about/kidsPlayDay22.jpg";
import schoolsOutVolunteers from "@/graphics/about/schoolsOutVolunteers22.jpg";
export default function Home() {
  const slides = [
    {
      content: spray,
      desc: "Teens spray painting at our School's Out Party 2022",
    },
    {
      content: ayFinger,
      desc: "A hand covered in paint making a peace sign next to finger painted letters 'AY'",
    },
    {
      content: kidsPlayDay,
      desc: "AY Volunteer chatting with some kids while he gets them paint",
    },
    {
      content: schoolsOutVolunteers,
      desc: "Volunteers from 2022 School's Out Party",
    },
    {
      content: schoolsOutVolunteers,
      desc: "Volunteers from 2022 School's Out Party",
    },
  ];
  return (
    <div className="Home">
      <Carousel slides={slides} />
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
