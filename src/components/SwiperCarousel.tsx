import spray from "@/graphics/aboutUs/kidsPaintingAtSchoolsOut22.jpg";
import ayFinger from "@/graphics/aboutUs/ayFingerPaint22.jpg";
import kidsPlayDay from "@/graphics/aboutUs/kidsPlayDay22.jpg";
import schoolsOutVolunteers from "@/graphics/aboutUs/schoolsOutVolunteers22.jpg";
import Image from "next/image";

// LEFT TO DO: Add images to carousel, work on styling. Also consider using onReachEnd with a function that sets the swiper.activeIndex to 0 in hopes that it rewinds to the front.

export default function SwiperCarousel() {
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
  ];
  return (
    <div className="SwiperCarousel">
      <div>
        {slides.map((slideObj, index) => (
          <div key={index}>
            <Image
              src={slideObj.content}
              alt={slideObj.desc}
              height={200}
              width={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}