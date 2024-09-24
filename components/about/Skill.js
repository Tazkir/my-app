import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import data from "../../utils/data";
import Image from "next/image";

function Skill() {
  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center relative py-8">
      <h3 className="text-2xl font-semibold text-balance">
        My Current Main Tech Stack
      </h3>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        slidesPerView={"auto"}
        rewind={true}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper w-[20em] bg-white/90 rounded-xl"
      >
        {data.mainStack.map((stack) => (
          <SwiperSlide key={stack.id}>
            <Image
              src={stack.image}
              alt={`${stack.name} Logo`}
              width={1000}
              height={1000}
              className="w-full h-full flex justify-center items-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Skill;
