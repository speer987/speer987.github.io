import Header from "~/components/Header";
import Footer from "~/components/Footer";
export default function Resume() {
  return (
    <div className="divide-y divide-[#5b422a] text-[#5b422a]">
      <Header
        selectedName={false}
        selectedResume={true}
        selectedProjects={false}
        selectedWork={false}
      />
      <div className="lg:pt-14 pt-44">
        <div className="w-full flex flex-col lg:py-25 lg:px-30 gap-10 items-center justify-center">
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
