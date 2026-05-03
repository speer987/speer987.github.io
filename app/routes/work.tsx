import { WorkCard, WorkCardHorizontal } from "~/components/Cards";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import work from "../data/work_info";
import MobileMenu from "~/components/MobileMenu";

export default function Work() {
  return (
    <div className="divide-y divide-dark-brown text-dark-brown">
      <Header
        selectedName={false}
        selectedResume={false}
        selectedProjects={false}
        selectedWork={true}
      />
      <MobileMenu />
      <div className="lg:pt-20 xl:pt-14 pt-20">
        <div className="flex flex-col p-5 lg:p-10 xl:py-25 xl:px-45 xl:gap-10 gap-8">
          <div className="lg:text-5xl text-4xl font-serif text-center">
            All Work Experience & Mentorships
          </div>
          <div className="flex flex-col lg:gap-7 gap-5">
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
