import person from "../../assets/person.jpeg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Calculators",
    description: "200+",
  },
  {
    id: 2,
    title: "Guidelines",
    description: "Clinical",
  },
  {
    id: 3,
    title: "Use Case",
    description: "Point of Care",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      {/* Left Content */}
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Introducing
            <span className="text-nowrap shrink-0 inline-block w-full">
              Dose<span className="text-[#A33397]">vise</span>
            </span>
          </p>

          <p className="text-xs xxs:text-lg lg:text-[18px] my-6 max-w-xl max-lg:mx-auto">
            A clinical decision support platform delivering precise,
            guideline-driven medication dosing by accounting for renal,
            hepatic, and patient-specific factors—right at the point of care.
          </p>

          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="#"
            >
              Explore Dosevise
            </a>
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative">
        <img
          className="shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl"
          src={person}
          alt="Dosevise preview"
        />
      </div>
    </div>
  );
};

export default Introduction;
