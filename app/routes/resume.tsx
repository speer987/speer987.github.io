import Header from "~/components/Header";
import Footer from "~/components/Footer";
import MobileMenu from "~/components/MobileMenu";
import Button from "~/components/Button";
export default function Resume() {
  return (
    <div className="divide-y divide-dark-brown text-dark-brown">
      <Header
        selectedName={false}
        selectedResume={true}
        selectedProjects={false}
        selectedWork={false}
      />
      <MobileMenu />
      <div className="lg:pt-20 xl:pt-14 pt-20">
        <div className="flex flex-col p-5 lg:p-10 xl:py-25 xl:px-45 xl:gap-10 gap-8 items-center">
          <div className="flex flex-col gap-3">
            <div className="lg:text-4xl text-3xl font-heading font-semibold  text-center">
              My Resume
            </div>
            <Button link="/resumes/resume.pdf" linkLabel="Download Resume" />
          </div>
          <img
            className="border-neutral-100 border shadow-xl hover:shadow-md hover:scale-99 transition duration-500 ease-in-out"
            src="/imgs/resume.png"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
