import Projects from "./Projects";
import calc1 from "../../assets/images/portfolio-images/dose.png";
import calc2 from "../../assets/images/portfolio-images/card-2.png";
import calc3 from "../../assets/images/portfolio-images/card-3.png";
import calc4 from "../../assets/images/portfolio-images/card-4.png";
import calc5 from "../../assets/images/portfolio-images/card-5.png";
import calc6 from "../../assets/images/portfolio-images/card-6.png";

const calculatorData = [
  {
    id: 1,
    image: calc1,
    title: "Renal Calculator",
    description: "Quick and easy renal dosing calculations for safe prescribing.",
    link: "#",
  },
  {
    id: 2,
    image: calc2,
    title: "Hepatic Calculator",
    description: "Adjust doses based on liver function for precise therapy.",
    link: "#",
  },
  {
    id: 3,
    image: calc3,
    title: "Pediatric Calculator",
    description: "Age-appropriate dosing calculations for pediatric patients.",
    link: "#",
  },
  {
    id: 4,
    image: calc4,
    title: "Geriatric Calculator",
    description: "Safe dosing adjustments for elderly patients with multiple comorbidities.",
    link: "#",
  },
  {
    id: 5,
    image: calc5,
    title: "Dosage Calculator",
    description: "General dosage calculations for various medications.",
    link: "#",
  },
  {
    id: 6,
    image: calc6,
    title: "QT Interval Prolongation",
    description: "Estimate risk of QT prolongation for safer prescribing.",
    link: "#",
  },
];

const Calculators = () => {
  return (
    <section
      id="calculators"
      className="px-4 py-12 md:py-16 lg:py-24 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="section-title">Calculators</p>
        <p className="text-gray-500 text-sm md:text-lg mt-4">
          Explore our range of clinical calculators designed to simplify medication dosing and enhance patient safety.
        </p>
      </div>

      {/* Calculator Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculatorData.map((calc) => (
          <div
            key={calc.id}
            className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            {/* Preview Image */}
            <img
              src={calc.image}
              alt={calc.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {calc.title}
            </h3>
            <p className="text-gray-500 text-sm mb-4">{calc.description}</p>
            <a
              href={calc.link}
              className="mt-auto inline-block text-indigo-600 font-medium hover:underline"
            >
              Open Calculator →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

// ✅ Make sure to export default
export default Calculators;
