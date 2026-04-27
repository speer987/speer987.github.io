import InfoList from "./InfoList";
import ProjLinks from "./ProjLinks";
import SkillPills from "./SkillPills";

type workCardProps = {
  company: string;
  role: string;
};

type projCardProps = {
  category: string;
  title: string;
  monthYear: string;
};

export function WorkCard({ company, role }: workCardProps) {
  return (
    <div className="flex flex-col bg-[#fbf6ee] border-2 border-[#f4e4cf] p-10 gap-1.5">
      <div>
        <div className="text-4xl font-serif">{company}</div>
        <div className="text-md font-barlow font-medium uppercase">{role}</div>
      </div>
      <InfoList />
      <SkillPills centeredText={false} />
    </div>
  );
}

export function ProjCard({ category, title, monthYear }: projCardProps) {
  return (
    <div className="divide-y divide-[#f4e4cf] border-2 border-[#f4e4cf]">
      <div className="relative">
        <p className="absolute right-0 z-10 font-barlow uppercase font-medium bg-[#fbf6ee] px-2 py-1 border-b-2 border-l-2 border-[#f4e4cf]">
          {category}
        </p>
        <img
          className="h-72 w-full object-cover z-0"
          src="app/imgs/filler.jpg"
        />
      </div>
      <div className="bg-[#fbf6ee] px-10 py-8 flex flex-col gap-1.5">
        <div>
          <h1 className="font-serif text-3xl text-center">{title}</h1>
          <p className="text-center font-barlow uppercase font-medium">
            {monthYear}
          </p>
        </div>
        <InfoList />
        <SkillPills centeredText={true} />
      </div>
      <ProjLinks />
    </div>
  );
}
