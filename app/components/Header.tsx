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
    <div className="hidden lg:flex lg:flex-row flex-col justify-between p-2.5 fixed h-fit z-20 w-full bg-white/80 backdrop-blur-md items-center border-b border-charcoal">
      <Link
        to="/"
        className={
          selectedName
            ? "rounded-lg lg:hidden text-center text-lg p-2 font-barlow tracking-widest uppercase  text-white font-semibold bg-dark-salmon decoration-2 underline-offset-4"
            : "lg:hidden text-center text-lg p-2 font-barlow uppercase  tracking-widest font-semibold text-charcoal hover:underline  hover:text-med-blue decoration-2 underline-offset-4 transition-all duration-300 ease-in-out"
        }
      >
        Saarah Peer
      </Link>
      <div className="flex flex-1">
        <Link
          to="/projects"
          className={
            selectedProjects
              ? "rounded-lg text-center p-2 font-barlow uppercase text-white font-semibold bg-dark-salmon decoration-2 underline-offset-4"
              : "text-center p-2 font-barlow uppercase text-charcoal hover:underline  hover:text-med-blue decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
          }
        >
          Projects
        </Link>
        <Link
          to="/work"
          className={
            selectedWork
              ? "rounded-lg text-center p-2 font-barlow uppercase  text-white font-semibold bg-dark-salmon decoration-2 underline-offset-4"
              : "text-center p-2 font-barlow uppercase  text-charcoal hover:underline  hover:text-med-blue decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
          }
        >
          Work Experience
        </Link>
        <Link
          to="/resume"
          className={
            selectedResume
              ? "rounded-lg text-center p-2 font-barlow uppercase  text-white font-semibold bg-dark-salmon decoration-2 underline-offset-4"
              : "text-center p-2 font-barlow uppercase  text-charcoal hover:underline  hover:text-med-blue decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
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
              ? "rounded-lg text-center text-lg p-2 font-barlow tracking-widest uppercase  text-white font-semibold bg-dark-salmon decoration-2 underline-offset-4"
              : "text-center text-lg p-2 font-barlow uppercase  tracking-widest font-semibold text-charcoal hover:underline  hover:text-med-blue decoration-2 underline-offset-4 transition-all duration-300 ease-in-out"
          }
        >
          Saarah Peer
        </Link>
      </div>
      <div className="flex flex-1 justify-end">
        <Link
          to="https://github.com/speer987"
          target="_blank"
          className="text-center p-2 font-barlow uppercase  text-charcoal hover:underline  hover:text-med-blue decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
        >
          Github
        </Link>
        <Link
          to="https://www.linkedin.com/in/saarah-peer/"
          target="_blank"
          className="text-center p-2 font-barlow uppercase  text-charcoal hover:underline  hover:text-med-blue decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
        >
          Linkedin
        </Link>
        <Link
          to="mailto:saarah.peer15@gmail.com"
          className="text-center p-2 font-barlow uppercase  text-charcoal hover:underline  hover:text-med-blue decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
        >
          EMail
        </Link>
      </div>
    </div>
  );
}
