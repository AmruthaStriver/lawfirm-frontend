export default function ClientTestimonials() {
  const testimonials = [
    {
      quote:
        "The team at Rao & Associates handled our corporate dispute with diligence and secured a favourable outcome. Highly recommended.",
      author: "S. Reddy — CXO, Fintech",
    },
    {
      quote:
        "The team at Rao & Associates handled our corporate dispute with diligence and secured a favourable outcome. Highly recommended.",
      author: "S. Reddy — CXO, Fintech",
    },
    {
      quote:
        "The team at Rao & Associates handled our corporate dispute with diligence and secured a favourable outcome. Highly recommended.",
      author: "S. Reddy — CXO, Fintech",
    },
  ];

  return (
    <section className="bg-[#e5e5e5] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-10 text-[#0A2342]">
          Client Testimonials
        </h2>

        {/* Left-aligned grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-xl shadow-sm border border-gray-200 text-left"
            >
              <p className="text-3xl text-[#D4A017] mb-4">“</p>
              <p className="text-gray-700 leading-relaxed mb-6">{item.quote}</p>
              <p className="font-semibold text-[#0A2342]">{item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
