type props = {
  centeredText: boolean;
  skills: string[];
};

export default function SkillPills({ centeredText, skills }: props) {
  console.log(skills);
  return (
    <div className="flex flex-col gap-1.5">
      {centeredText ? (
        <p className="font-barlow uppercase font-medium text-center">
          Skills List
        </p>
      ) : (
        <p className="font-barlow uppercase font-medium">Skills List</p>
      )}

      {skills?.length > 0 && (
        <ul className="justify-center flex flex-row gap-1 flex-wrap font-barlow uppercase tracking-wide">
          {skills?.map((skill) => (
            <li key={skill} className="bg-white px-1 border border-[#f4e4cf]">
              {skill}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
