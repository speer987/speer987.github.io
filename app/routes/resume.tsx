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
      <div className="pt-14">
        <div className="flex flex-col py-25 px-30 gap-10 items-center justify-center">
          <div className="text-5xl font-serif text-center">My Resume</div>
          <embed src="app/resumes/resume.pdf" width="900" height="1180" />
        </div>
        <Footer />
      </div>
    </div>
  );
}
