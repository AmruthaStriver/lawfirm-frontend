import hero from "../assets/hero.jpg";

export default function AboutSection() {
  return (
    <section className="bg-[#faf9f6] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">

        {/* Left Image */}
        <div className="flex justify-start">
          <img
            src={hero}
            alt="Office"
            className="rounded-xl shadow-md w-full max-w-[550px]"
          />
        </div>

        {/* Right Text */}
        <div className="text-left">
          <h2 className="text-4xl font-bold mb-6 text-[#0A2342] leading-tight">
            About Rao & Associates
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Rao & Associates is a full-service law firm offering expert counsel 
            across corporate law, litigation, arbitration and family matters. 
            We combine deep legal knowledge with practical advice to help clients 
            achieve clear outcomes.
          </p>

          <ul className="text-gray-700 space-y-4 text-lg">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Recognised advocates across High Courts and Tribunals
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Corporate advisory and dispute resolution
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Personalised client service with transparent fees
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
