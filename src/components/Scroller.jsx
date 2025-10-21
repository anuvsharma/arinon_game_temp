import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const scrollerItems = [
  { id: 1, title: "Item 1", desc: "Description 1", image: "https://swiperjs.com/demos/images/nature-1.jpg" },
  { id: 2, title: "Item 2", desc: "Description 2", image: "https://swiperjs.com/demos/images/nature-2.jpg" },
  { id: 3, title: "Item 3", desc: "Description 3", image: "https://swiperjs.com/demos/images/nature-3.jpg" },
  { id: 4, title: "Item 4", desc: "Description 4", image: "https://swiperjs.com/demos/images/nature-4.jpg" },
  { id: 5, title: "Item 5", desc: "Description 5", image: "https://swiperjs.com/demos/images/nature-5.jpg" },
  { id: 6, title: "Item 6", desc: "Description 6", image: "https://swiperjs.com/demos/images/nature-6.jpg" },
];

export default function Scroller() {
  return (
    <section
      id="scroller"
      className="min-h-screen bg-[#F37C20] flex flex-col items-center justify-center py-16"
    >
      <h2 className="text-5xl font-bold text-white mb-12">Scroller Section</h2>

      <div className="w-full max-w-6xl px-6">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper [&_.swiper-pagination-bullet]:!bg-white"
        >
          {scrollerItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#1d3962] text-white h-100 rounded-xl flex flex-col items-center justify-center shadow-xl">
                <img
                  src={item.image}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
