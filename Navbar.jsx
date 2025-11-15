import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "../assets/logi.jpg"; // we'll add the logo later

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="logo" className="h-12 w-auto" />
          <h1 className="text-2xl font-bold text-gray-800">Law Firm</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-black transition">Home</li>
          <li className="hover:text-black transition">About Us</li>
          <li className="hover:text-black transition">Practice Areas</li>
          <li className="hover:text-black transition">Attorneys</li>
          <li className="hover:text-black transition">Contact</li>
        </ul>

        {/* Appointment Button */}
        <div className="hidden md:block">
          <Button className="px-6 py-3 text-lg">Book Consultation</Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 p-6 text-gray-700 font-medium">
            <li>Home</li>
            <li>About Us</li>
            <li>Practice Areas</li>
            <li>Attorneys</li>
            <li>Contact</li>
            <Button>Book Consultation</Button>
          </ul>
        </div>
      )}
    </nav>
  );
}
