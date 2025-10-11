import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const scrollerItems = [
  { id: 1, title: "Item 1", desc: "Description 1" },
  { id: 2, title: "Item 2", desc: "Description 2" },
  { id: 3, title: "Item 3", desc: "Description 3" },
  { id: 4, title: "Item 4", desc: "Description 4" },
  { id: 5, title: "Item 5", desc: "Description 5" },
  { id: 6, title: "Item 6", desc: "Description 6" },
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
          className="mySwiper"
        >
          {scrollerItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#1d3962] text-white h-80 rounded-xl flex flex-col items-center justify-center shadow-xl">
                <h3 className="text-3xl font-bold">{item.title}</h3>
                <p className="text-lg mt-4">{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
