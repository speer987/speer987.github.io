import Hero from "~/components/Hero";
import Projects from "~/components/Projects";
import WorkExp from "~/components/WorkExp";

export default function Home() {
  return (
    <div className="divide-y divide-[#5b422a] text-[#5b422a]">
      {/* HEADER / LINK BAR */}
      <div className="flex flex-row justify-between font-barlow font-medium bg-[#fbf6ee]">
        <div className="flex flex-row  divide-x border-r">
          <a className="flex flex-row p-4 uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out">
            Home
          </a>
          <a
            href="https://github.com/speer987"
            className="flex flex-row p-4 uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/saarah-peer/"
            className="flex flex-row p-4 uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex flex-row divide-x border-l">
          <button className="flex flex-row p-4 uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out">
            About
          </button>
          <button className="flex flex-row p-4 uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out">
            Projects
          </button>
          <button className="flex flex-row p-4 uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out">
            Work Experience
          </button>
          <button className="flex flex-row p-4 uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out">
            Resume
          </button>
        </div>
      </div>
      {/* HERO SEGMENT */}
      <Hero />
      {/* WORK EXP SEGMENT */}
      <div className="py-25 px-30 flex flex-col gap-20">
        <WorkExp />
        <Projects />
      </div>
      {/* FOOTER */}
      <div className="font-sans bg-[#fbf6ee] text-center p-7">
        Handcrafted with ❤️ by Saarah Peer
      </div>
    </div>
  );
}
