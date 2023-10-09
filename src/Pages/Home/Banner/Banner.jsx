import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'animate.css';

import { Autoplay } from 'swiper/modules';

const Banner = () => {

    const bannerSlides = [
        {
            image: "https://images.unsplash.com/photo-1611107683227-e9060eccd846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            title: "Diamonds Jewelry Collection",
            subtitle: "Diamonds From Heaven",
        },
        {
            image: "https://images.unsplash.com/photo-1591209627710-d2427565a41f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            title: "Diamond Ring",
            subtitle: "Color Fantasy",
        },
        {
            image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            title: "Diamond Necklace",
            subtitle: "Color Fantasy",
        },
    ];

    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                  }}
                modules={[ Autoplay]}
                className="mySwiper"
            >
                {bannerSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="object-cover bg-cover bg-center h-[700px] relative"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                            }}
                        >
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                                <h1 className="text-3xl md:text-5xl font-bold mb-4 animate__animated animate__slideInLeft animate__slower">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-xl font-bold">{slide.subtitle}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;