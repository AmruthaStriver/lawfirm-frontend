const practiceAreas = [
  {
    title: "Corporate & Commercial Law",
    desc: "M&A, contracts, compliance"
  },
  {
    title: "Property & Civil Litigation",
    desc: "Title disputes, recovery"
  },
  {
    title: "Criminal Defence",
    desc: "Criminal appeals, bail"
  },
  {
    title: "Family & Divorce",
    desc: "Custody, maintenance, settlements"
  },
  {
    title: "Arbitration & Alternate Dispute Resolution",
    desc: "Domestic & international arbitration"
  },
  {
    title: "Employment & Labour",
    desc: "Compliance, disputes, settlements"
  }
];

export default function PracticeAreas() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold mb-10 text-[#0A2342]">
          Practice Areas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2 text-[#0A2342]">
                {area.title}
              </h3>
              <p className="text-gray-600">{area.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
