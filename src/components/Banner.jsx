// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import bgImg1 from "../assets/volunteer-couple-writing-clipboard.jpg";
import bgImg2 from "../assets/volunteer1.avif";
import bgImg3 from "../assets/volunteer2.avif";
import bgImg4 from "../assets/volunteer4.avif";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./banner.css";
import Slide from "./Slide";
const Banner = () => {
  return (
    <>
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
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide text="Together for Change" img={bgImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide text="Small Actions, Big Impact" img={bgImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide text="Empowering Change, Together" img={bgImg3} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide text="Small Actions, Big Impact" img={bgImg4} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
