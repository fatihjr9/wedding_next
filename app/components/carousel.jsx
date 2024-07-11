import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../globals.css";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/img/sec2photo.avif"
            className="w-full bg-center object-cover"
            width={1000}
            height={1000}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/sec2photo.avif"
            className="w-full bg-center object-cover"
            width={1000}
            height={1000}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/sec2photo.avif"
            className="w-full bg-center object-cover"
            width={1000}
            height={1000}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/sec2photo.avif"
            className="w-full bg-center object-cover"
            width={1000}
            height={1000}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/sec2photo.avif"
            className="w-full bg-center object-cover"
            width={1000}
            height={1000}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/sec2photo.avif"
            className="w-full bg-center object-cover"
            width={1000}
            height={1000}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/sec2photo.avif"
            className="w-full bg-center object-cover"
            width={1000}
            height={1000}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/sec2photo.avif"
            className="w-full bg-center object-cover"
            width={1000}
            height={1000}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/sec2photo.avif"
            className="w-full bg-center object-cover"
            width={1000}
            height={1000}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
