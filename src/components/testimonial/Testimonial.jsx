import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Dosevise has transformed the way we calculate complex medication dosages, saving time and reducing errors.",
    quote: `The platform's intuitive interface and guideline-driven calculations have significantly improved our workflow. Our clinical team now feels more confident when prescribing for patients with renal or hepatic impairment.`,
    name: "Dr. Sarah Thompson",
    designation: "Chief Pharmacist, City Hospital",
  },
  {
    message:
      "With Dosevise, pediatric and geriatric dosing has never been easier or safer.",
    quote: `We were able to implement age-appropriate dosing across all our wards seamlessly. The clinical decision support features reduce manual calculations and potential errors, making our patient care more precise and efficient.`,
    name: "Dr. Ahmed Malik",
    designation: "Head of Pediatrics, Green Valley Clinic",
  },
  {
    message:
      "Dosevise is a reliable partner for evidence-based dosing decisions.",
    quote: `Our team trusts Dosevise for every dose adjustment, whether it's general medication, insulin therapy, or QT interval risk management. The recommendations are clear, accurate, and backed by clinical guidelines.`,
    name: "Dr. Emily Rodriguez",
    designation: "Cardiology Consultant, Riverside Medical Center",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonials</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
