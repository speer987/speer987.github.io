import { Link } from "react-router";

type props = {
  section: string;
  linkLabel: string;
  link: string;
};

export default function SectionLinks({ section, linkLabel, link }: props) {
  return (
    <div className="flex lg:flex-row flex-col gap-3 lg:gap-0">
      <div className="font-heading font-bold  text-4xl">{section}</div>
      <div className="hidden lg:block flex-1 divide-y divide-charcoal ml-3">
        <div className="h-1/2"></div>
        <div className="h-1/2"></div>
      </div>
      <Link
        to={link}
        className="w-fit cursor-pointer font-barlow uppercase text-lg border rounded-lg border-charcoal text-white bg-dark-salmon hover:bg-salmon transition duration-300 ease-in-out px-2 py-1 font-medium"
      >
        {linkLabel}
      </Link>
    </div>
  );
}
