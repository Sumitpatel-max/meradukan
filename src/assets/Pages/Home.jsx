import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const items = [
  { src: "pan.webp", alt: "Maharajapan", name: "Maharaja Pan Ice-cream", link: "/Pan" },
  { src: "cassata.webp", alt: "Cassata", name: "Cassata Ice-cream", link: "/Casata" },
  { src: "coco.avif", alt: "Coco", name: "Coco", link: "/Coco" },
  { src: "faluda.avif", alt: "falooda", name: "Falooda", link: "/Falooda" },
  { src: "ice.avif", alt: "icecream", name: "Icecream", link: "/Icecream" },
  { src: "ice2.avif", alt: "icecream", name: "Icecream2", link: "/Icecream2" },
  { src: "ice3.webp", alt: "icecream", name: "Icecream3", link: "/Icecream3" },
  { src: "lassi.webp", alt: "Lassi", name: "Lassi", link: "/Lassi" },
  { src: "pan2.webp", alt: "pan", name: "Cold Maharaja Pan Ice-cream", link: "/Cold Maharaja Pan Icecream" },
  { src: "rabadi.webp", alt: "Rabadi", name: "Rabadi", link: "/Rabadi" },
  { src: "shakes.avif", alt: "Shakes", name: "Shakes", link: "/Shakes" },
  { src: "s1.jpg", alt: "ice-cream", name: "Cassata Ice-cream", link: "/Cassata Icecream" },
];

const drinks = [
  { image: "coco.avif", link: "#" },
  { image: "shakes.avif", link: "#" },
  { image: "faluda.avif", link: "#" },
  { image: "rabadi.webp", link: "#" },
  { image: "lassi.webp", link: "#" },
  { image: "ice.avif", link: "#" },
];

const Home = () => {
  return (
    <>
      <div className="p-4 bg-gradient-to-r from-blue-700 via-pink-800 to-red-700 shadow-lg">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 1500 }}
          navigation
          loop
          className="text-white"
        >
          {drinks.map((drink, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <a href={drink.link} target="_blank" rel="noopener noreferrer">
                <div className="p-4 text-center rounded-lg shadow-2xl">
                  <img 
                    src={drink.image} 
                    alt={drink.name} 
                    className="md:w-200 md:h-85 md:ml-80 object-cover rounded-lg" 
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="bg-gradient-to-r from-blue-700 via-pink-800 to-red-700 min-h-screen p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="rounded-lg shadow-2xl text-center border-2 border-blue-600 p-4 bg-white bg-opacity-80">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="rounded-lg w-full md:h-110 h-70 shadow-2xl" 
                />
                <h1 className="font-bold text-xl mt-2">{item.name}</h1>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;