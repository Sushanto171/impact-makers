import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import bgImg1 from "../assets/volunteer-couple-writing-clipboard.jpg";
import bgImg2 from "../assets/volunteer1.avif";
import bgImg3 from "../assets/volunteer2.avif";
import bgImg4 from "../assets/volunteer4.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./banner.css";
import Slide from "./Slide";

const slidesData = [
  { id: 1, text: "Together for Change", img: bgImg1 },
  { id: 2, text: "Small Actions, Big Impact", img: bgImg2 },
  { id: 3, text: "Empowering Change, Together", img: bgImg3 },
  { id: 4, text: "Small Actions, Big Impact", img: bgImg4 },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="flex -mt-[39px]">
        <div className="h-0.5 bg-[#ffdaa3] w-full"></div>
        <div className="w-full"></div>
        <div className="bg-[#ffdaa3] w-full"></div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <Slide
              text={slide.text}
              img={slide.img}
              id={slide.id}
              isActive={index === activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
