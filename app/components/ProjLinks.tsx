import { Link } from "react-router";

type props = {
  links: Record<string, string>;
};

export default function ProjLinks({ links }: props) {
  console.log(links);
  return (
    <ul className="flex flex-row justify-between font-barlow uppercase divide-x divide-[#f4e4cf]">
      {links
        ? Object.entries(links).map(([source, link]) => (
            <Link
              key={source}
              to={link}
              className="cursor-pointer flex-1 p-1.5 text-center font-medium
          text-[#fbf6ee] bg-[#A8794D] hover:bg-[#5b422a] transition ease-in-out
          duration-300"
            >
              {source}
            </Link>
          ))
        : ""}

      {/* <li className="cursor-pointer flex-1 p-1.5 text-center font-medium text-[#fbf6ee] bg-[#A8794D] hover:bg-[#5b422a] transition ease-in-out duration-300">
        Github
      </li>
      <li className="cursor-pointer flex-1 p-1.5 text-center font-medium text-[#fbf6ee] bg-[#A8794D] hover:bg-[#5b422a] transition ease-in-out duration-300">
        Github
      </li>
      <li className="cursor-pointer flex-1 p-1.5 text-center font-medium text-[#fbf6ee] bg-[#A8794D] hover:bg-[#5b422a] transition ease-in-out duration-300">
        Github
      </li> */}
    </ul>
  );
}
