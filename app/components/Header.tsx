import { Link } from "react-router";

export default function Header() {
  return (
    <div className="flex flex-row justify-between font-barlow font-medium bg-[#fbf6ee]">
      <div className="w-full flex flex-row divide-x border-r">
        <Link
          to="/"
          className="text-center justify-center flex-1 flex-row p-4 uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out"
        >
          Home
        </Link>
        <a
          href="https://github.com/speer987"
          className="text-center justify-center flex-1 flex-row p-4 uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out"
          target="_blank"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/saarah-peer/"
          className="text-center justify-center flex-1 flex-row p-4 uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out"
        >
          LinkedIn
        </a>
        <div className="text-center justify-center flex-2 font-serif text-4xl p-2">
          SP
        </div>
        <Link
          to="/projects"
          className="text-center justify-center flex-1 flex-row p-4 uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out"
        >
          Projects
        </Link>
        <Link
          to="/work"
          className="text-center justify-center flex-1 flex-row p-4 uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out"
        >
          Work Experience
        </Link>
        <button className="text-center justify-center flex-1 flex-row p-4 uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out">
          Resume
        </button>
      </div>
    </div>
  );
}
