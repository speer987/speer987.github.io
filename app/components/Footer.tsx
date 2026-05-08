import { Link } from "react-router";
export default function Footer() {
  return (
    <div className="divide-y divide-light-blue">
      <div className="text-charcoal border-t border-light-blue">
        <div className="bg-dark-blue text-white lg:divide-x divide-light-blue flex lg:flex-row flex-col">
          <div className=" hidden lg:block lg:w-1/3 flex-col gap-1 py-12 lg:px-10 xl:px-25 font-body text-center justify-center">
            <div className="font-heading font-semibold  text-3xl">
              Navigation
            </div>
            <div className="flex flex-col gap-1">
              <Link
                to="/projects"
                className="font-barlow uppercase hover:underline  hover:text-salmon decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
              >
                Projects
              </Link>
              <Link
                to="/work"
                className="font-barlow uppercase hover:underline  hover:text-salmon decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
              >
                Work
              </Link>
              <Link
                to="/resume"
                className="font-barlow uppercase hover:underline  hover:text-salmon decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
              >
                Resume
              </Link>
            </div>
          </div>
          <div className="text-dark-blue pattern lg:w-1/3 flex flex-col gap-1 py-12  font-body text-center justify-center">
            <Link
              to="/"
              className="justify-center font-heading font-semibold  text-4xl hover:underline  hover:text-med-blue decoration-2 underline-offset-4 transition duration-300 ease-in-out"
            >
              Saarah Peer
            </Link>
            <div>This site was made with ❤️ and React</div>
          </div>
          <div className="hidden lg:block lg:w-1/3 flex-col gap-1 py-12 lg:px-10 xl:px-25 font-body text-center justify-center">
            <div className="font-heading font-semibold  text-3xl">
              Stay Connected
            </div>
            <div className="flex flex-col gap-1">
              <Link
                to="https://github.com/speer987"
                target="_blank"
                className="font-barlow uppercase hover:underline hover:text-salmon decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
              >
                Github
              </Link>
              <Link
                to="https://www.linkedin.com/in/saarah-peer/"
                target="_blank"
                className="font-barlow uppercase hover:underline  hover:text-salmon decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
              >
                Linkedin
              </Link>
              <Link
                to="/"
                className="font-barlow uppercase hover:underline  hover:text-salmon decoration-2 underline-offset-4 transition-all duration-300 ease-in-out font-medium"
              >
                EMail
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
