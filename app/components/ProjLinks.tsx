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
    <ul className="flex divide-y md:flex-row flex-col justify-between font-barlow uppercase md:divide-y-0 md:divide-x divide-dark-beige">
      {links
        ? Object.entries(links).map(([source, link]) => (
            <Link
              key={source}
              to={link}
              target="_blank"
              className="cursor-pointer flex-1 p-1.5 text-center font-medium
          text-light-beige bg-caramel hover:bg-dark-brown transition ease-in-out
          duration-300"
            >
              {source}
            </Link>
          ))
        : ""}
    </ul>
  );
}
