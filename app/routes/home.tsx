import Hero from "~/components/Hero";
import Projects from "~/components/Projects";
import WorkExp from "~/components/WorkExp";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import MobileMenu from "~/components/MobileMenu";
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
      <MobileMenu />
      {/* HERO SEGMENT */}
      <Hero />
      {/* WORK EXP SEGMENT */}
      {/* <div className="hidden xl:block">This is 1280px</div> */}
      <div className="xl:py-20 xl:px-30 lg:p-10 p-5 flex flex-col gap-10 xl:gap-10 lg:gap-20">
        <WorkExp />
        <Projects />
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
