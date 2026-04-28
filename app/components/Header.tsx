import { Link } from "react-router";

export default function Header() {
  return (
    <div className="flex justify-between p-2.5 fixed h-14 z-20 w-full bg-[#f5f1e8]/50 backdrop-blur-md items-center border-b border-[#5b422a]">
      <div className="flex flex-1">
        <Link
          to="/projects"
          className="text-center p-2 font-barlow uppercase  text-[#5b422a] hover:underline  hover:text-[#A8794D] decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
        >
          Projects
        </Link>
        <Link
          to="/work"
          className="text-center p-2 font-barlow uppercase  text-[#5b422a] hover:underline  hover:text-[#A8794D] decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
        >
          Work Experience
        </Link>
        <Link
          to="/resume"
          className="text-center p-2 font-barlow uppercase  text-[#5b422a] hover:underline  hover:text-[#A8794D] decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
        >
          Resume
        </Link>
      </div>
      <Link
        to="/"
        className="flex flex-1 justify-center p-2 font-serif text-4xl text-[#5b422a] hover:underline  hover:text-[#A8794D] decoration-2 underline-offset-4 transition duration-300 ease-in-out"
      >
        Saarah Peer
      </Link>
      <div className="flex flex-1 justify-end">
        <Link
          to="https://github.com/speer987"
          target="_blank"
          className="text-center p-2 font-barlow uppercase  text-[#5b422a] hover:underline  hover:text-[#A8794D] decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
        >
          Github
        </Link>
        <Link
          to="https://www.linkedin.com/in/saarah-peer/"
          target="_blank"
          className="text-center p-2 font-barlow uppercase  text-[#5b422a] hover:underline  hover:text-[#A8794D] decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
        >
          Linkedin
        </Link>
        <Link
          to="/"
          className="text-center p-2 font-barlow uppercase  text-[#5b422a] hover:underline  hover:text-[#A8794D] decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
        >
          EMail
        </Link>
      </div>
    </div>

    // <div className=" w-full justify-between font-barlow bg-[#fbf6ee] fixed top-0 z-20">
    //   <div className="divide-x border-r text-center justify-center">
    //     <Link
    //       to="/"
    //       className="text-center justify-center p-2 flex-row font-serif text-4xl hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out"
    //     >
    //       Saarah Peer
    //     </Link>
    //     <Link
    //       to="/projects"
    //       className="text-center justify-center p-2 flex-row hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out"
    //     >
    //       Projects
    //     </Link>
    //     <Link
    //       to="/work"
    //       className="text-center justify-center flex-row uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out"
    //     >
    //       Work Experience
    //     </Link>
    //     <Link
    //       to="/resume"
    //       className="text-center justify-center flex-row uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out"
    //     >
    //       Resume
    //     </Link>
    //   </div>
    // </div>
  );
}
