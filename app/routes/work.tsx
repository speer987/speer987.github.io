import { WorkCard } from "~/components/Cards";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

export default function Work() {
  return (
    <div className="divide-y divide-[#5b422a] text-[#5b422a]">
      <Header />
      <div className="pt-14">
        <div className="flex flex-col py-25 px-30 gap-10">
          <div className="text-5xl font-serif text-center">
            All Work Experience & Mentorships
          </div>
          <div className="grid grid-cols-2 gap-7">
            <WorkCard company="dummy" role="dummy" />
            <WorkCard company="dummy" role="dummy" />
            <WorkCard company="dummy" role="dummy" />
            <WorkCard company="dummy" role="dummy" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
