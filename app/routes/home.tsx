import Hero from "~/components/Hero";
import Projects from "~/components/Projects";
import WorkExp from "~/components/WorkExp";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
export default function Home() {
  return (
    <div className="text-[#5b422a]">
      {/* HEADER / LINK BAR */}
      <Header
        selectedName={true}
        selectedResume={false}
        selectedProjects={false}
        selectedWork={false}
      />
      {/* HERO SEGMENT */}
      <Hero />
      {/* WORK EXP SEGMENT */}
      <div className="lg:py-25 lg:px-30 p-10 flex flex-col gap-20">
        <WorkExp />
        <Projects />
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
