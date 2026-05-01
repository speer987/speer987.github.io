import { WorkCard, WorkCardHorizontal } from "~/components/Cards";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import work from "../data/work_info";

export default function Work() {
  return (
    <div className="divide-y divide-[#5b422a] text-[#5b422a]">
      <Header
        selectedName={false}
        selectedResume={false}
        selectedProjects={false}
        selectedWork={true}
      />
      <div className="pt-14">
        <div className="flex flex-col py-25 px-50 gap-10">
          <div className="text-5xl font-serif text-center">
            All Work Experience & Mentorships
          </div>
          <div className="flex flex-col gap-7">
            {work?.map((exp) => (
              <WorkCardHorizontal
                key={exp?.role}
                company={exp?.company}
                role={exp?.role}
                date={exp?.monthYear}
                desc={exp?.desc}
                location={exp?.location}
                sentence={exp?.sentence}
                destination=""
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
