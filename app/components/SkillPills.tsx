type props = {
  centeredText: boolean;
  skills: string[];
};

export default function SkillPills({ centeredText, skills }: props) {
  // console.log(skills);
  return (
    <div className="flex flex-col gap-1.5">
      {centeredText ? (
        <div className="flex flex-row">
          <div className="flex-1 divide-y divide-dark-brown mr-3">
            <div className="h-1/2"></div>
            <div className="h-1/2"></div>
          </div>
          <p className="font-barlow uppercase font-medium text-center">
            Skills Used
          </p>
          <div className="flex-1 divide-y divide-dark-brown ml-3">
            <div className="h-1/2"></div>
            <div className="h-1/2"></div>
          </div>
        </div>
      ) : (
        <p className="font-barlow uppercase font-medium">Skills Used</p>
      )}

      <div>{skills?.join(" ▪ ")}</div>
      {/* {skills?.length > 0 && (
        <ul className="justify-center flex flex-row gap-1 flex-wrap font-barlow uppercase tracking-wide">
          {skills?.map((skill) => (
            <li key={skill} className="bg-white px-1 border border-dark-beige">
              {skill}
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
}
