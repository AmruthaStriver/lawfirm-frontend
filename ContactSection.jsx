export default function ContactSection() {
  return (
    <section className="bg-[#062040] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col space-y-6 text-left">

          <h2 className="text-3xl font-bold">Get in touch</h2>

          <p className="text-gray-200 leading-relaxed max-w-lg">
            Schedule a consultation or visit our office.  
            We handle matters across India and provide remote consultations for NRIs.
          </p>

          <div className="space-y-3 text-gray-300">
            <p>📍 12 Legal Street, Hyderabad, Telangana</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ contact@raolaw.in</p>
          </div>

        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="text-left">
          <form className="bg-white p-6 rounded-lg shadow-md text-black space-y-4 w-full max-w-xl">

            <div className="text-left">
              <label className="font-medium">Name</label>
              <input
                className="w-full border p-3 rounded mt-1"
                type="text"
              />
            </div>

            <div className="text-left">
              <label className="font-medium">Email</label>
              <input
                className="w-full border p-3 rounded mt-1"
                type="email"
              />
            </div>

            <div className="text-left">
              <label className="font-medium">Message</label>
              <textarea
                className="w-full border p-3 rounded mt-1 h-28"
              />
            </div>

            <button className="bg-[#C6A56F] text-white px-6 py-3 rounded-md">
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
