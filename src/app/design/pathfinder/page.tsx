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
    <main className="min-h-screen pb-8">
      <Navbar />
      <div className="flex flex-col">
        <h2 className="text-center mt-4 md:mt-2 text-sm md:text-base font-semibold px-4">Client: Njeri Allen</h2>
        <p className="mx-auto mt-2 max-w-lg px-4 text-center text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance text-gray-950">
          Pathfinder
        </p>
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 mt-6 md:mt-8">
          <Swiper 
            spaceBetween={20} 
            slidesPerView={1}
            pagination={{
              type: 'fraction',
              clickable: true,
            }} 
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper shadow-lg"
            style={{
              '--swiper-navigation-size': '25px',
              '--swiper-navigation-color': '#3b82f6',
              '--swiper-pagination-color': '#3b82f6',
            } as React.CSSProperties}
          >
            {slides.map((src, i) => (
              <SwiperSlide key={i} className="flex items-center justify-center bg-gray-50">
                <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
                  <Image
                    src={src}
                    alt={`Slide ${i + 1}`}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority={i === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      {/* Mobile-friendly custom styles */}
      <style jsx global>{`
        .mySwiper {
          width: 100%;
          height: auto;
          min-height: 300px;
        }
        
        .mySwiper .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Make navigation arrows more mobile-friendly */
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 30px !important;
            height: 30px !important;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          }
          
          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 16px !important;
          }
          
          .swiper-pagination {
            bottom: 10px !important;
            font-size: 14px;
          }
        }
        
        /* Better spacing on desktop */
        @media (min-width: 768px) {
          .mySwiper {
            min-height: 500px;
          }
        }
      `}</style>
    </main>
  );
}