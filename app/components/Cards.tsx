import InfoList from "./InfoList";
import ProjLinks from "./ProjLinks";
import SkillPills from "./SkillPills";
import { Link } from "react-router";

type workCardProps = {
  company: string;
  role: string;
  date: string;
  location: string;
  sentence: string;
  destination: string;
  desc: string[];
};

type Links = {
  code?: string;
  readme?: string;
  demo?: string;
  "codesandbox demo"?: string;
  "github pages demo"?: string;
  devpost?: string;
};

type projCardProps = {
  category: string;
  title: string;
  monthYear?: string;
  desc: string[];
  skills: string[];
  links?: Links;
  img?: string;
  sentence: string;
};

export function WorkCard({
  company,
  role,
  date,
  location,
  sentence,
  destination,
}: workCardProps) {
  return (
    <div className="relative flex flex-col bg-[#fbf6ee] border-2 border-[#f4e4cf] p-8 lg:p-10 gap-1.5">
      <div>
        <div className="text-3xl font-serif">{role}</div>
        <div className="font-barlow flex flex-row justify-between flex-wrap">
          <div className="flex lg:flex-row flex-col lg:gap-1">
            <div className="font-barlow font-medium uppercase">{company}</div>
            <p className="lg:block hidden">▪</p>
            <div className="font-barlow">{location}</div>
          </div>
          {destination == "" ? (
            <div className="absolute left-0 top-0 z-10 font-barlow uppercase font-medium bg-[#fbf6ee] px-2 py-1 border-r-2 border-b-2 border-[#f4e4cf]">
              {date}
            </div>
          ) : (
            <div className="absolute top-0 right-0 z-10 font-barlow uppercase font-medium bg-[#fbf6ee] px-2 py-1 border-b-2 border-l-2 border-[#f4e4cf]">
              {date}
            </div>
          )}
        </div>
      </div>

      <div className="relative">
        <InfoList destination={destination} sentence={sentence} />
      </div>
      {/* <InfoList /> */}
      {/* <SkillPills centeredText={false} /> */}
    </div>
  );
}

export function WorkCardHorizontal({
  company,
  role,
  date,
  location,
  sentence,
  destination,
  desc,
}: workCardProps) {
  return (
    <div className="relative flex flex-col bg-[#fbf6ee] border-2 border-[#f4e4cf] p-10 gap-1.5">
      <div>
        <div className="text-3xl font-serif">{role}</div>
        <div className="font-barlow flex flex-row justify-between flex-wrap">
          <div className="flex flex-row gap-1">
            <div className="font-barlow font-medium uppercase">{company}</div>
            <p>▪</p>
            <div className="font-barlow">{location}</div>
          </div>
          <div className="absolute top-0 right-0 z-10 font-barlow uppercase font-medium bg-[#fbf6ee] px-2 py-1 border-b-2 border-l-2 border-[#f4e4cf]">
            {date}
          </div>
        </div>
      </div>

      <div className="relative">
        <InfoList destination={destination} sentence={sentence} />
      </div>

      <div>
        {desc?.length > 0 && (
          <ul className="list-[square] list-inside">
            {desc?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      {/* <SkillPills skills={skills} centeredText={true} /> */}
      {/* <InfoList /> */}
      {/* <SkillPills centeredText={false} /> */}
    </div>
  );
}

export function ProjCard({
  category,
  title,
  monthYear,
  desc,
  skills,
  links,
  sentence,
}: projCardProps) {
  console.log(skills);
  return (
    <div className="h-full flex flex-col divide-y divide-[#f4e4cf] border-2 border-[#f4e4cf]">
      <div className="relative">
        <p className="absolute right-0 z-10 font-barlow uppercase font-medium bg-[#fbf6ee] px-2 py-1 border-b-2 border-l-2 border-[#f4e4cf]">
          {category}
        </p>
        <img
          className="lg:h-72 h-52 w-full object-cover z-0"
          src="app/imgs/filler.jpg"
        />
      </div>
      <div className="bg-[#fbf6ee] lg:p-10 p-8 flex flex-col gap-5 flex-1">
        <div className="gap-3">
          <div>
            <h1 className="font-serif text-3xl text-center">{title}</h1>
            {monthYear && (
              <p className="text-center font-barlow uppercase font-medium">
                {monthYear}
              </p>
            )}
          </div>
          <InfoList sentence={sentence} destination="/projects" />
        </div>
        <SkillPills skills={skills} centeredText={true} />
      </div>
      {links && <ProjLinks links={links} />}
    </div>
  );
}

export function ProjCardHorizontal({
  category,
  title,
  monthYear,
  desc,
  skills,
  links,
  img,
  sentence,
}: projCardProps) {
  console.log(skills);
  return (
    <div className="flex flex-row divide-x divide-[#e8d4b6] border-2 border-[#e8d4b6]">
      <div className="relative w-full flex flex-col divide-y divide-[#e8d4b6]">
        <div className="bg-[#fbf6ee] flex flex-col lg:p-10 p-8 pt-12 gap-2.5 flex-1">
          <p className="absolute left-0 top-0 z-10 font-barlow uppercase font-medium bg-[#fbf6ee] px-2 py-1 border-b-2 border-r-2 border-[#e8d4b6]">
            {category}
          </p>
          <div>
            <h1 className="font-serif lg:text-4xl text-3xl text-center">
              {title}
            </h1>
            <p className="text-center font-barlow uppercase font-medium">
              {monthYear}
            </p>
          </div>
          <InfoList sentence={sentence} destination="" />
          {/* <p>{desc}</p> */}
          <div>
            {desc?.length > 0 && (
              <ul className="list-[square] list-inside">
                {desc?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
          <SkillPills skills={skills} centeredText={true} />
        </div>
        {links && <ProjLinks links={links} />}
      </div>
    </div>
  );
}

// <div className="flex flex-row divide-x divide-[#e8d4b6] border-2 border-[#e8d4b6]">
//   <div className={`relative ${img ? "w-2/6" : ""}`}>
//     {img ? (
//       <p className="absolute left-0 z-10 font-barlow uppercase font-medium bg-[#fbf6ee] px-2 py-1 border-b-2 border-r-2 border-[#e8d4b6]">
//         {category}
//       </p>
//     ) : (
//       ""
//     )}
//     {img ? <img className="object-cover w-full z-0" src={img} /> : ""}
//   </div>
//   <div
//     className={`relative ${img ? "w-4/6" : "w-full"} flex flex-col divide-y divide-[#e8d4b6]`}
//   >
//     <div className="bg-[#fbf6ee] flex flex-col p-10 gap-2.5 flex-1">
//       <div>
//         {img ? (
//           ""
//         ) : (
//           <p className="absolute left-0 top-0 z-10 font-barlow uppercase font-medium bg-[#fbf6ee] px-2 py-1 border-b-2 border-r-2 border-[#e8d4b6]">
//             {category}
//           </p>
//         )}
//         <h1 className="font-serif text-3xl text-center">{title}</h1>
//         <p className="text-center font-barlow uppercase font-medium">
//           {monthYear}
//         </p>
//       </div>
//       <InfoList sentence={sentence} destination="" />
//       {/* <p>{desc}</p> */}
//       <div className="inset-shadow-sm">
//         {desc?.length > 0 && (
//           <ul className="h-24 overflow-y-auto list-[square] list-inside">
//             {desc?.map((item) => (
//               <li key={item}>{item}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//       <SkillPills skills={skills} centeredText={true} />
//     </div>
//     {links && <ProjLinks links={links} />}
//   </div>
// </div>
