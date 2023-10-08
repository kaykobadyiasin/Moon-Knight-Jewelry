import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'animate.css';

import { Autoplay } from 'swiper/modules';

const Banner = () => {

    const bannerSlides = [
        {
            image: "https://images.unsplash.com/photo-1569173675610-42c361a86e37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
            title: "MY UNIFORM SHOP 1",
            subtitle: "INSPIRED COMFORT 1",
        },
        {
            image: "https://images.unsplash.com/photo-1608680574102-3a81ac3c1c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
            title: "MY UNIFORM SHOP 2",
            subtitle: "INSPIRED COMFORT 2",
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
                            className="object-cover bg-cover bg-center h-[600px] relative"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                            }}
                        >
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                                <h1 className="text-3xl md:text-5xl font-bold mb-4 animate__animated animate__zoomInUp">
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