import { ProjCard } from "./Cards";
import SectionLinks from "./SectionLinks";
import projects from "~/data/proj_info";

export default function Projects() {
  return (
    <div className="flex flex-col gap-5">
      <SectionLinks
        section="Featured Projects"
        linkLabel="See All Projects"
        link="/projects"
      />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-7">
        {[...projects]
          .filter((proj) => proj.feature)
          .sort((a, b) => b.year - a.year) // sorts projects by descending order by comparing years. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
          .map((proj) => (
            <ProjCard
              key={proj.project}
              category={proj?.category}
              title={proj?.project}
              monthYear={proj?.monthYear}
              desc={proj?.desc}
              img=""
              sentence={proj?.sentence}
              skills={proj?.stack}
              links={proj?.links}
            />
          ))}
      </div>
    </div>
  );
}
