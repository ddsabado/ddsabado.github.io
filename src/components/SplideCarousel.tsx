import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useState } from "react";

type CarouselSlide = {
  image: string;
  title?: string;
  alt?: string;
};

type SplideCarouselProps = {
  slides: CarouselSlide[];
  imageClassName?: string;
  autoplay?: boolean;
  onActiveIndexChange?: (index: number) => void;
};

function SplideCarousel({
  slides,
  imageClassName = "project-image",
  autoplay = true,
  onActiveIndexChange,
}: SplideCarouselProps) {
  const [, setActiveIndex] = useState(0);

  return (
    <div className="carousel-frame">
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          focus: "center",
          gap: "1rem",
          rewind: true,
          trimSpace: false,
          padding: { left: "10%", right: "10%" },
          autoplay,
          interval: 4000,
          pauseOnHover: true,
          arrows: true,
          pagination: true,
          speed: 600,
        }}
        onMoved={(_splide, newIndex) => {
          setActiveIndex(newIndex);
          onActiveIndexChange?.(newIndex);
        }}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={`${slide.image}-${index}`}>
            <img
              className={imageClassName}
              src={slide.image}
              alt={slide.alt ?? slide.title ?? `Slide ${index + 1}`}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default SplideCarousel;
