import { WorkCard } from "./Cards";
import SectionLinks from "./SectionLinks";
import work from "../data/work_info";

export default function WorkExp() {
  return (
    <div className="flex flex-col gap-5">
      <SectionLinks
        link="/work"
        section="Work Experience & Mentorships"
        linkLabel="See All Work Experience"
      />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
        {work?.slice(0, 4).map((exp) => (
          <WorkCard
            key={exp?.role}
            company={exp?.company}
            role={exp?.role}
            date={exp?.monthYear}
            desc={exp?.desc}
            location={exp?.location}
            sentence={exp?.sentence}
            destination="/work"
          />
        ))}
      </div>
    </div>
  );
}
