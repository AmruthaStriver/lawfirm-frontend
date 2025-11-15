export default function OurTeam() {
  const team = [
    { initial: "A.", name: "A. Rao", role: "Senior Advocate" },
    { initial: "P.", name: "P. Sharma", role: "Senior Advocate" },
    { initial: "K.", name: "K. Iyer", role: "Senior Advocate" },
    { initial: "L.", name: "L. Gupta", role: "Senior Advocate" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-14 text-[#0A2342]">
          Our Team
        </h2>

        {/* Left-aligned grid */}
        <div className="grid md:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-start">

              {/* Circle */}
              <div className="w-36 h-36 bg-[#e5e5e5] rounded-full flex items-center justify-center text-3xl font-semibold text-[#0A2342]">
                {member.initial}
              </div>

              {/* Name */}
              <p className="mt-4 text-lg font-medium text-[#0A2342]">
                {member.name}
              </p>

              {/* Role */}
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
