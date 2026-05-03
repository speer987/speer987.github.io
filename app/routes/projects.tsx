import { ProjCardHorizontal } from "~/components/Cards";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import projects from "../data/proj_info";
import MobileMenu from "~/components/MobileMenu";

export default function Project() {
  return (
    <div className="divide-y divide-dark-brown text-dark-brown">
      <Header
        selectedName={false}
        selectedResume={false}
        selectedProjects={true}
        selectedWork={false}
      />
      <MobileMenu />
      <div className="lg:pt-20 xl:pt-14 pt-20">
        <div className="flex flex-col p-5 lg:p-10 xl:py-25 xl:px-45 xl:gap-10 gap-8">
          <div className="lg:text-5xl text-4xl font-serif text-center">
            All Projects
          </div>
          <div className="flex flex-col lg:gap-10 gap-5">
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
