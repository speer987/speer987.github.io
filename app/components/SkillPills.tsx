type props = {
  centeredText: boolean;
};

export default function SkillPills({ centeredText }: props) {
  return (
    <div className="flex flex-col gap-1.5">
      {centeredText ? (
        <p className="font-barlow uppercase font-medium text-center">
          Skills List
        </p>
      ) : (
        <p className="font-barlow uppercase font-medium">Skills List</p>
      )}
      <ul className="flex flex-row gap-2 flex-wrap font-barlow uppercase tracking-wide">
        <li className="bg-white px-1 border border-[#f4e4cf]">React.js</li>
        <li className="bg-white px-1 border border-[#f4e4cf]">Next.js</li>
        <li className="bg-white px-1 border border-[#f4e4cf]">skill 3</li>
      </ul>
    </div>
  );
}
