"use client"
import '../../globals.css';
import Navbar from "@/components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/grid'; 
import 'swiper/css/autoplay';

import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

export default function PresentationPage() {
  const slides = ["/slides/1.png", "/slides/3.png", "/slides/4.png", "/slides/5.png", "/slides/6.png", "/slides/7.png"];

  return (
    <main>
      <Navbar />
      <div className="grid grid-rows-2">
        <h2 className="text-center mt-2 text-base/7 font-semibold">Client: Njeri Allen</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Pathfinder
        </p>
        <div className="justify-center items-center max-w-4xl mx-auto p-6 mt-2">
        <Swiper 
          spaceBetween={30} 
          slidesPerView={1}
          pagination={{
            type: 'fraction',
          }} 
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          >
          {slides.map((src, i) => (
            <SwiperSlide key={i}>
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                width={1200}
                height={800}
                className="rounded-xl shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </main>
  );
}

