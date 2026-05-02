import { Link } from "react-router";

type props = {
  section: string;
  linkLabel: string;
  link: string;
};

export default function SectionLinks({ section, linkLabel, link }: props) {
  return (
    <div className="flex md:flex-row flex-col gap-3 md:gap-0">
      <div className="font-serif text-4xl">{section}</div>
      <div className="hidden md:block flex-1 divide-y divide-[#5b422a] ml-3">
        <div className="h-1/2"></div>
        <div className="h-1/2"></div>
      </div>
      <Link
        to={link}
        className="w-fit cursor-pointer font-barlow uppercase text-lg border-2 border-[#e8d4b6] text-[#fbf6ee] bg-[#A8794D] hover:bg-[#5b422a] transition duration-300 ease-in-out px-2 py-1 font-medium"
      >
        {linkLabel}
      </Link>
    </div>
  );
}
