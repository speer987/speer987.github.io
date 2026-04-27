import { WorkCard } from "./Cards";
import SectionLinks from "./SectionLinks";

export default function WorkExp() {
  return (
    <div className="flex flex-col gap-5">
      <SectionLinks
        section="Work Experience & Mentorships"
        linkLabel="See All Work Experience"
      />
      <div className="grid grid-cols-3 gap-7">
        <WorkCard
          company="Google"
          role="Computer Science Summer Institute Student"
        />
        <WorkCard
          company="Google"
          role="Computer Science Summer Institute Student"
        />
        <WorkCard
          company="Google"
          role="Computer Science Summer Institute Student"
        />
      </div>
    </div>
  );
}
