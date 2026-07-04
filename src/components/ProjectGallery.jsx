"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectGallery({ images }) {
  if (!images?.length) return null;

  return (
    <section className="project-gallery" aria-label="Project screenshots gallery">
      <p className="gallery-hint">⟵ drag to explore ⟶</p>

      <Swiper
        modules={[Navigation, Pagination, Keyboard, Mousewheel]}
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        keyboard
        mousewheel
        grabCursor
        breakpoints={{
          768: {
            slidesPerView: 1.6,
          },
          1024: {
            slidesPerView: 2.2,
          },
          1400: {
            slidesPerView: 2.7,
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={src}>
            <img
              src={src}
              alt={`Screenshot ${index + 1}`}
              loading={index < 2 ? "eager" : "lazy"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}