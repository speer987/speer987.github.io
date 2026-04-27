import { ProjCard } from "./Cards";
import SectionLinks from "./SectionLinks";

export default function Projects() {
  return (
    <div className="flex flex-col gap-5">
      <SectionLinks section="Featured Projects" linkLabel="See All Projects" />
      <div className="flex flex-row gap-7">
        <ProjCard
          category="Data Analytics"
          title="EV Market Analysis"
          monthYear="April 2026"
        />
        <ProjCard
          category="Data Analytics"
          title="EV Market Analysis"
          monthYear="April 2026"
        />
        <ProjCard
          category="Data Analytics"
          title="EV Market Analysis"
          monthYear="April 2026"
        />
      </div>
    </div>
  );
}
