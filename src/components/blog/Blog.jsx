import img1 from "../../assets/images/blog/blog-1.jpg";
import img2 from "../../assets/images/blog/blog-2.jpg";
import img3 from "../../assets/images/blog/blog-3.jpg";
import img4 from "../../assets/images/blog/blog-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

// Updated content for Guidelines section
const guidelinesData = [
  {
    id: 1,
    image: img1,
    date: "Dec 2025",
    comments: 0,
    title: "Renal Dosing Guidelines Overview",
    link: "#!",
  },
  {
    id: 2,
    image: img2,
    date: "Dec 2025",
    comments: 0,
    title: "Hepatic Impairment: Recommended Dose Adjustments",
    link: "#!",
  },
  {
    id: 3,
    image: img3,
    date: "Dec 2025",
    comments: 0,
    title: "Pediatric Medication Safety Best Practices",
    link: "#!",
  },
  {
    id: 4,
    image: img4,
    date: "Dec 2025",
    comments: 0,
    title: "Geriatric Dosing: Reducing Adverse Events",
    link: "#!",
  },
  {
    id: 5,
    image: img2,
    date: "Dec 2025",
    comments: 0,
    title: "General Dosage Calculations: Key Considerations",
    link: "#!",
  },
  {
    id: 6,
    image: img1,
    date: "Dec 2025",
    comments: 0,
    title: "QT Interval Monitoring Guidelines",
    link: "#!",
  },
];

const Guidelines = () => {
  return (
    <div className="content py-25 px-2 relative" id="guidelines">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Guidelines</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Explore our curated clinical guidelines and best practices for safe medication dosing and patient care.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {guidelinesData.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10"
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Guidelines;
