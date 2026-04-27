type props = {
  section: string;
  linkLabel: string;
};

export default function SectionLinks({ section, linkLabel }: props) {
  return (
    <div className="flex flex-row justify-between">
      <div className="font-serif text-4xl">{section}</div>
      <div className="flex-1 divide-y divide-[#5b422a] flex-col ml-3">
        <div className="h-1/2"></div>
        <div className="h-1/2"></div>
      </div>
      <button className="cursor-pointer font-barlow uppercase text-lg border-2 border-[#e8d4b6] text-[#fbf6ee] bg-[#A8794D] hover:bg-[#5b422a] transition duration-300 ease-in-out px-2 font-medium">
        {linkLabel}
      </button>
    </div>
  );
}
