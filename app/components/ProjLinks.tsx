import { Link } from "react-router";

type props = {
  links: Links;
};

type Links = {
  code?: string;
  readme?: string;
  demo?: string;
  "codesandbox demo"?: string;
  "github pages demo"?: string;
  devpost?: string;
};

export default function ProjLinks({ links }: props) {
  // console.log(links);
  return (
    <ul className="flex divide-y divide-neutral-100 md:flex-row flex-col justify-between font-barlow uppercase md:divide-y-0 md:divide-x">
      {links
        ? Object.entries(links).map(([source, link]) => (
            <Link
              key={source}
              to={link}
              target="_blank"
              className="cursor-pointer flex-1 p-1.5 text-center font-medium
          text-white bg-dark-salmon hover:bg-salmon transition ease-in-out
          duration-300"
            >
              {source}
            </Link>
          ))
        : ""}
    </ul>
  );
}
