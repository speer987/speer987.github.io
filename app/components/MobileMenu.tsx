import { useState } from "react";
import { Link } from "react-router";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <div className="flex flex-row justify-between p-2.5 fixed h-fit z-20 w-full bg-light-beige/50 backdrop-blur-md items-center border-b border-dark-brown ">
        <Link
          to="/"
          className="text-center text-lg p-2 font-barlow uppercase tracking-widest font-semibold text-dark-brown hover:underline"
        >
          Saarah Peer
        </Link>
        {/* Hamburger button */}
        <button className="p-2" onClick={() => setIsOpen(true)}>
          ☰
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`border-l border-dark-brown fixed top-0 right-0 h-full w-64 bg-light-beige z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex flex-col gap-4 font-barlow uppercase font-medium">
          <button onClick={() => setIsOpen(false)}>✕</button>

          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/work">Work Experience</Link>
          <Link to="/resume">Resume</Link>
          <Link to="https://github.com/speer987" target="_blank">
            GitHub
          </Link>
          <Link to="https://www.linkedin.com/in/saarah-peer/" target="_blank">
            LinkedIn
          </Link>
          <Link to="mailto:saarah.peer15@gmail.com">Email</Link>
        </div>
      </div>
    </div>
  );
}
