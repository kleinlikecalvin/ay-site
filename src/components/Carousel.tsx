import "./_Carousel.scss";
// Need to set it up to dynamically accept any amount of slides

// Need to figure out the onClick behavior

// Maybe take in a slidesPerView prop
// The homepage = 1 slidePerView
// The others on desktop = 4?
// Tablet = 3?
// Mobile = 1?

// Probably want to be able to swiper or drag, not just click the arrows

export default function Carousel() {
  const slides = [
    { text: "one", link: "/" },
    { text: "two", link: "/" },
    { text: "three", link: "/" },
    { text: "four", link: "/" },
    { text: "five", link: "/" },
  ];
  // function prevOnClick() {
  //   el.scrollLeft -= 500;
  // }
  // function nextOnClick() {
  //   .scrollLeft += 500;
  // }

  return (
    <div className="Carousel">
      <button
        id="prev-arrow"
        className="arrow prev"
        // onClick={() => prevOnClick}
      >
        ^
      </button>
      <ul id="slides-container">
        {slides.map((slide) => {
          return (
            <li key={slide.text}>
              {/* if slide has an image then render image */}
              <a href={slide.link}>{slide.text}</a>
            </li>
          );
        })}
      </ul>
      <button id="next-arrow" className="arrow next">
        ^
      </button>
    </div>
  );
}
