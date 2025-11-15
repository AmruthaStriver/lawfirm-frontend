import { Button } from "@/components/ui/button";
import logo from "../assets/logi.jpg"; 
export default function Hero() {
  return (
    <section className="w-full bg-[#0A2342] text-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative">
        
        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Trusted legal expertise. <br /> Proven results.
          </h1>

          <p className="text-lg text-gray-300 mb-8">
            We deliver pragmatic, timely, and outcome-driven legal solutions
            for individuals and businesses across India. Corporate, litigation,
            arbitration and more.
          </p>

          <div className="flex gap-4 mb-12">
            <Button className="bg-[#C8A96A] hover:bg-[#b48d4d] text-black px-6 py-5 text-lg">
              Schedule Consultation
            </Button>

            <Button
              variant="outline"
              className="border-gray-300 text-white px-6 py-5 text-lg"
            >
              Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-14">
            <div>
              <h2 className="text-3xl font-bold">25+</h2>
              <p className="text-gray-300">Years of Combined Experience</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">500+</h2>
              <p className="text-gray-300">Matters Resolved</p>
            </div>
          </div>
        </div>

        {/* Placeholder Box (Team Photo / Office) */}
        <div className="hidden md:flex justify-center">
          <div className="w-[400px] h-[300px] bg-white/10 rounded-xl flex items-center justify-center text-gray-300 text-lg">
            <img src={logo} alt="logo"/>
          </div>
        </div>

        {/* Faded Symbol on Right */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 text-[200px] hidden lg:block">
          ⚕
        </div>
      </div>
    </section>
  );
}
