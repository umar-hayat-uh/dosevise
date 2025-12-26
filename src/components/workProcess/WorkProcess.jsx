const doseviseFeatures = [
  {
    id: 1,
    title: "Comprehensive Clinical Suite",
    description:
      "Go beyond dosing with a full library of essential calculators—from HEART Scores and CKD-EPI to MELD-Na and CHA₂DS₂-VASc. All specialties, one platform.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-indigo-600 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-3-3v6m0-12a9 9 0 110 18 9 9 0 010-18z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Age-Specific Precision",
    description:
      "Calculations that adapt to your patient. Dedicated pediatric, geriatric, and adult modes ensure age-appropriate dosing and scoring accuracy at every life stage.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-indigo-600 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l6.16-3.422a12.083 12.083 0 01.84 5.422c0 3.866-3.134 7-7 7s-7-3.134-7-7a12.083 12.083 0 01.84-5.422L12 14z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Smart Dose Optimization",
    description:
      "Renal & hepatic dose adjustment, insulin sensitivity (ISF, CR), and weight-based dosing in one click. Minimize errors and personalize therapy with confidence.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-indigo-600 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6m16 0l-8 8-8-8"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Trusted & Efficient",
    description:
      "Built on current guidelines with offline access and a clinician-designed interface. Get reliable results faster, at the bedside or on the go.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-indigo-600 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
];

const DoseviseFeatures = () => {
  return (
    <section className="px-4 py-12 md:py-5 lg:py-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Dosevise Features
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-lg leading-relaxed">
          Dosevise simplifies clinical dosing with precision, safety, and
          user-friendly design. Explore the core features trusted by clinicians.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doseviseFeatures.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
          >
            {feature.svg}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoseviseFeatures;
