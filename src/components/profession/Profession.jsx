import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Clinical Calculations",
    description:
      "Design and maintain precise calculators for renal, hepatic, pediatric, geriatric dosing, and more to support accurate clinical decision-making.",
  },
  {
    id: 2,
    title: "Guideline Integration",
    description:
      "Incorporate evidence-based medical guidelines into all modules to ensure safe and reliable recommendations at the point of care.",
  },
  {
    id: 3,
    title: "User Experience & Interface",
    description:
      "Craft intuitive dashboards and interfaces that simplify complex medical data, making dosing insights easy to interpret and act upon.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5 "
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">Our Expertise</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            Dosevise specializes in delivering accurate, guideline-driven clinical decision support tools for healthcare professionals.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            Our platform combines robust calculation engines, clear interfaces, and evidence-based logic to make complex dosing decisions simple and safe.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Explore Dosevise
        </a>
      </div>
      <div>
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
