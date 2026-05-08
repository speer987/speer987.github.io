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
    <div className="shadow-xl hover:shadow-md hover:scale-99 transition duration-500 ease-in-out relative flex flex-col bg-white border-neutral-100 border rounded-lg p-8 lg:p-10 gap-1.5">
      <div>
        <div className="lg:text-2xl text-xl font-heading font-semibold">
          {role}
        </div>
        <div className="font-barlow flex flex-row justify-between flex-wrap">
          <div className="text-dark-blue flex flex-col">
            <p className="font-barlow font-medium uppercase">{company}</p>
            <p className="font-barlow">{location}</p>
          </div>
          {destination == "" ? (
            <div className="absolute left-0 top-0 z-10 font-barlow uppercase font-medium px-2 py-1 bg-med-blue text-white rounded-bl-lg rounded-tr-lg">
              {date}
            </div>
          ) : (
            <div className="absolute top-0 right-0 z-10 font-barlow uppercase font-medium px-2 py-1 bg-med-blue text-white rounded-bl-lg rounded-tr-lg">
              {date}
            </div>
          )}
        </div>
      </div>

      <div className="relative h-full">
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
    <div className="shadow-xl hover:shadow-md hover:scale-99 transition duration-500 relative flex flex-col bg-white divide-neutral-100 border-neutral-100 border ease-in-out rounded-lg overflow-hidden p-10 gap-1.5">
      <div>
        <div className="lg:text-2xl text-xl font-heading font-semibold">
          {role}
        </div>
        <div className="font-barlow flex flex-row justify-between flex-wrap">
          <div className="flex lg:flex-row flex-col lg:gap-1">
            <div className="font-barlow font-medium uppercase">{company}</div>
            <p className="hidden lg:block">•</p>
            <div className="font-barlow">{location}</div>
          </div>
          <div className="absolute top-0 right-0 z-10 font-barlow uppercase font-medium px-2 py-1 bg-med-blue text-white rounded-bl-lg">
            {date}
          </div>
        </div>
      </div>

      <div className="relative">
        <InfoList destination={destination} sentence={sentence} />
      </div>

      <div>
        {desc?.length > 0 && (
          <ul className="list-disc list-inside">
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
  img,
}: projCardProps) {
  // console.log(skills);
  return (
    <div className="shadow-xl hover:shadow-md hover:scale-99 transition duration-500 h-full flex flex-col bg-white divide-y divide-neutral-100 border-neutral-100 ease-in-out border rounded-lg overflow-hidden">
      <div className="relative">
        <p className="absolute right-0 z-10 font-barlow uppercase font-medium px-2 py-1 bg-med-blue text-white rounded-bl-lg">
          {category}
        </p>
        <img className="aspect-video w-full object-cover z-0" src={img} />
      </div>
      <div className="lg:p-10 p-8 flex flex-col gap-5 flex-1">
        <div className="flex flex-col gap-1">
          <h1 className="font-heading font-semibold lg:text-2xl text-xl text-center">
            {title}
          </h1>
          {monthYear && (
            <p className="text-center font-barlow uppercase font-medium">
              {monthYear}
            </p>
          )}
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
  // console.log(skills);
  return (
    <div className="flex flex-row bg-white divide-x divide-neutral-100 border-neutral-100 border shadow-xl hover:shadow-md hover:scale-99 transition duration-500 ease-in-out rounded-lg overflow-hidden">
      <div className="relative w-full flex flex-col">
        <div className="flex flex-col lg:p-10 p-8 pt-12 gap-2.5 flex-1">
          <p className="absolute left-0 top-0 z-10 font-barlow uppercase font-medium px-2 py-1 bg-med-blue text-white rounded-br-lg">
            {category}
          </p>
          <div>
            <h1 className="font-heading font-semibold lg:text-2xl text-xl text-center">
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
              <ul className="list-disc list-inside">
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
