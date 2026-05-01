import { ProjCardHorizontal } from "~/components/Cards";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import projects from "../data/proj_info";

export default function Project() {
  return (
    <div className="divide-y divide-[#5b422a] text-[#5b422a]">
      <Header
        selectedName={false}
        selectedResume={false}
        selectedProjects={true}
        selectedWork={false}
      />
      <div className="pt-14">
        <div className="flex flex-col py-25 px-30 gap-10">
          <div className="text-5xl font-serif text-center">All Projects</div>
          <div className="flex flex-col gap-10">
            {[...projects] // ... makes a copy of the array so sort doesn't mutate the original list.
              .sort((a, b) => b.year - a.year) // sorts projects by descending order by comparing years. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
              .map((proj) => (
                <ProjCardHorizontal
                  img={proj?.img}
                  key={proj?.project}
                  category={proj?.category}
                  title={proj?.project}
                  monthYear={proj?.monthYear}
                  sentence={proj?.sentence}
                  desc={proj?.desc}
                  skills={proj?.stack}
                  links={proj?.links}
                />
              ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
