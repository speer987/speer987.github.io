import SectionLinks from "~/components/SectionLinks";

export default function Banner() {
  return (
    <div className="banner flex divide-y divide-x divide-light-blue">
      <div className="pattern w-1/2"></div>
      <div className="w-1/2 bg-med-blue text-white flex flex-col gap-5 font-body justify-center items-center">
        <div className="flex flex-col">
          <p className="lg:text-7xl text-6xl font-heading font-bold">
            Saarah Peer
          </p>
          <p className="lg:text-2xl text-xl">
            Software Development • Analytics • Design
          </p>
        </div>
        <div className="w-122 flex lg:flex-row flex-col gap-3 lg:gap-0 justify-center">
          <div className="font-barlow uppercase text-2xl font-medium ">
            portfolio
          </div>
          <div className="hidden lg:block flex-1 divide-y divide-white ml-3">
            <div className="h-1/2"></div>
            <div className="h-1/2"></div>
          </div>
          <p className="w-fit cursor-pointer font-barlow uppercase text-xl border rounded-lg border-white text-white bg-dark-blue hover:bg-salmon transition duration-300 ease-in-out px-2 py-1 font-medium">
            speer987.github.io
          </p>
        </div>
      </div>
    </div>
  );
}
