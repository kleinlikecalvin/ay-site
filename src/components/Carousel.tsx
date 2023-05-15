"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./_Carousel.scss";

// Images
import Image from "next/image";

export default function Carousel({ slides }) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      breakpoints: {
        "(min-width: 815px)": {
          slides: {
            perView: 4,
          },
        },
        "(max-width: 814px)": {
          slides: {
            perView: 2,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div ref={sliderRef} className="Carousel keen-slider">
      {slides.map((slideObj, index) => (
        <div
          key={index}
          className={`keen-slider__slide number-slide${index + 1}`}
        >
          <Image src={slideObj.content} alt={slideObj.desc} width={200} />
        </div>
      ))}
    </div>
  );
}
