import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const images = [
  { src: 'https://via.placeholder.com/600x400', alt: 'Slide 1' },
  { src: 'https://via.placeholder.com/600x400/ff7f7f', alt: 'Slide 2' },
  { src: 'https://via.placeholder.com/600x400/87ceeb', alt: 'Slide 3' },
  { src: 'https://via.placeholder.com/600x400/32cd32', alt: 'Slide 4' },
];

const Carousel = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation
        loop
        className="rounded-lg shadow-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
