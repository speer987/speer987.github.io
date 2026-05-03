import { Link } from "react-router";
type props = {
  selectedProjects: boolean;
  selectedWork: boolean;
  selectedResume: boolean;
  selectedName: boolean;
};

export default function Header({
  selectedProjects,
  selectedWork,
  selectedResume,
  selectedName,
}: props) {
  return (
    <div className="hidden lg:flex lg:flex-row flex-col justify-between p-2.5 fixed h-fit z-20 w-full bg-light-beige/50 backdrop-blur-md items-center border-b border-dark-brown">
      <Link
        to="/"
        className={
          selectedName
            ? "lg:hidden text-center text-lg p-2 font-barlow tracking-widest uppercase  text-light-beige font-semibold bg-dark-brown decoration-2 underline-offset-4"
            : "lg:hidden text-center text-lg p-2 font-barlow uppercase  tracking-widest font-semibold text-dark-brown hover:underline  hover:text-caramel decoration-2 underline-offset-4 transition-all duration-300 ease-in-out"
        }
      >
        Saarah Peer
      </Link>
      <div className="flex flex-1">
        <Link
          to="/projects"
          className={
            selectedProjects
              ? "text-center p-2 font-barlow uppercase text-light-beige font-medium bg-dark-brown decoration-2 underline-offset-4"
              : "text-center p-2 font-barlow uppercase text-dark-brown hover:underline  hover:text-caramel decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
          }
        >
          Projects
        </Link>
        <Link
          to="/work"
          className={
            selectedWork
              ? "text-center p-2 font-barlow uppercase  text-light-beige font-medium bg-dark-brown decoration-2 underline-offset-4"
              : "text-center p-2 font-barlow uppercase  text-dark-brown hover:underline  hover:text-caramel decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
          }
        >
          Work Experience
        </Link>
        <Link
          to="/resume"
          className={
            selectedResume
              ? "text-center p-2 font-barlow uppercase  text-light-beige font-medium bg-dark-brown decoration-2 underline-offset-4"
              : "text-center p-2 font-barlow uppercase  text-dark-brown hover:underline  hover:text-caramel decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
          }
        >
          Resume
        </Link>
      </div>
      <div className="lg:block hidden p-2.5">
        <Link
          to="/"
          className={
            selectedName
              ? "text-center text-lg p-2 font-barlow tracking-widest uppercase  text-light-beige font-semibold bg-dark-brown decoration-2 underline-offset-4"
              : "text-center text-lg p-2 font-barlow uppercase  tracking-widest font-semibold text-dark-brown hover:underline  hover:text-caramel decoration-2 underline-offset-4 transition-all duration-300 ease-in-out"
          }
        >
          Saarah Peer
        </Link>
      </div>
      <div className="flex flex-1 justify-end">
        <Link
          to="https://github.com/speer987"
          target="_blank"
          className="text-center p-2 font-barlow uppercase  text-dark-brown hover:underline  hover:text-caramel decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
        >
          Github
        </Link>
        <Link
          to="https://www.linkedin.com/in/saarah-peer/"
          target="_blank"
          className="text-center p-2 font-barlow uppercase  text-dark-brown hover:underline  hover:text-caramel decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
        >
          Linkedin
        </Link>
        <Link
          to="mailto:saarah.peer15@gmail.com"
          className="text-center p-2 font-barlow uppercase  text-dark-brown hover:underline  hover:text-caramel decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
        >
          EMail
        </Link>
      </div>
    </div>

    // <div className=" w-full justify-between font-barlow bg-light-beige fixed top-0 z-20">
    //   <div className="divide-x border-r text-center justify-center">
    //     <Link
    //       to="/"
    //       className="text-center justify-center p-2 flex-row font-serif text-4xl hover:bg-dark-beige hover:text-dark-brown transition duration-300 ease-in-out"
    //     >
    //       Saarah Peer
    //     </Link>
    //     <Link
    //       to="/projects"
    //       className="text-center justify-center p-2 flex-row hover:bg-dark-beige hover:text-dark-brown transition duration-300 ease-in-out"
    //     >
    //       Projects
    //     </Link>
    //     <Link
    //       to="/work"
    //       className="text-center justify-center flex-row uppercase hover:bg-dark-beige hover:text-dark-brown transition duration-300 ease-in-out"
    //     >
    //       Work Experience
    //     </Link>
    //     <Link
    //       to="/resume"
    //       className="text-center justify-center flex-row uppercase hover:bg-dark-beige hover:text-dark-brown transition duration-300 ease-in-out"
    //     >
    //       Resume
    //     </Link>
    //   </div>
    // </div>
  );
}
