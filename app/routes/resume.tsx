import Header from "~/components/Header";
import Footer from "~/components/Footer";
import MobileMenu from "~/components/MobileMenu";
export default function Resume() {
  return (
    <div className="divide-y divide-[#5b422a] text-[#5b422a]">
      <Header
        selectedName={false}
        selectedResume={true}
        selectedProjects={false}
        selectedWork={false}
      />
      <MobileMenu />
      <div className="lg:pt-20 xl:pt-14 pt-20">
        <div className="flex flex-col p-5 lg:p-10 xl:py-25 xl:px-45 xl:gap-10 gap-8">
          <div className="lg:text-5xl text-4xl font-serif text-center">
            My Resume
          </div>
          <embed src="app/resumes/resume.pdf" width="900" height="1180" />
        </div>
        <Footer />
      </div>
    </div>
  );
}
