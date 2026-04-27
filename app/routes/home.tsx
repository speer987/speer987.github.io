// import type { Route } from "./+types/home";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

export default function Home() {
  return (
    <div className="divide-y divide-[#5b422a] text-[#5b422a]">
      {/* HEADER / LINK BAR */}
      <div className="flex flex-row justify-between font-barlow font-medium bg-[#fbf6ee]">
        <div className="flex flex-row  divide-x border-r">
          <a className="flex flex-row p-4 uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out">
            Home
          </a>
          <a
            href="https://github.com/speer987"
            className="flex flex-row p-4 uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/saarah-peer/"
            className="flex flex-row p-4 uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex flex-row divide-x border-l">
          <button className="flex flex-row p-4 uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out">
            About
          </button>
          <button className="flex flex-row p-4 uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out">
            Projects
          </button>
          <button className="flex flex-row p-4 uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out">
            Work Experience
          </button>
          <button className="flex flex-row p-4 uppercase hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out">
            Resume
          </button>
        </div>
      </div>
      {/* HERO SEGMENT */}
      <div>
        <div className="divide-x divide-[#5b422a] flex flex-row text-[#5b422a] bg-[#fbf6ee]">
          <div className="flex flex-col gap-1 p-25 font-sans flex-none">
            <p className="text-2xl">Hello, I'm</p>
            <p className="text-8xl font-serif">Saarah Peer</p>
            <p className="text-2xl">I'm passionate about</p>
            <div className="text-md font-barlow flex gap-2 mt-2 text-lg font-medium">
              <button className="p-3 border uppercase  hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out">
                Software Development
              </button>
              <button className="p-3 border uppercase  hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out">
                Data Analytics
              </button>
              <button className="p-3 border uppercase  hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition duration-300 ease-in-out">
                UI Design
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1 flex-1 p-25">
            <div className="text-5xl font-serif">About Me</div>
            <p className="font-sans text-lg">
              I'm a recent grad who recieved a B.S. in Computer Science with a
              Minor in Statistics and Data Science at Loyola Marymount
              University in Los Angeles, California. <br />
              <br /> I love developing minimal user interfaces for mobile and
              web apps (like this one), and finding business insights from
              datasets.
            </p>
          </div>
        </div>
      </div>
      {/* WORK EXP SEGMENT */}
      <div className="py-25 px-30 flex flex-col gap-20">
        <div className="flex flex-row justify-between">
          <div className="font-serif text-4xl">
            Work Experience & Mentorships
          </div>
          <div className="flex-1 divide-y flex-col ml-3">
            <div className="h-1/2"></div>
            <div className="h-1/2"></div>
          </div>
          <button className="font-barlow uppercase text-lg border bg-[#fbf6ee] hover:bg-[#f4e4cf] hover:text-[#3f2b20] border-[#5b422a] transition duration-300 ease-in-out px-2 font-medium">
            See All Work Experience
          </button>
        </div>
        <div>Work Exp</div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-between">
            <div className="font-serif text-4xl">Featured Projects</div>
            <div className="flex-1 divide-y flex-col ml-3">
              <div className="h-1/2"></div>
              <div className="h-1/2"></div>
            </div>
            <button className="font-barlow uppercase text-lg border bg-[#fbf6ee] hover:bg-[#f4e4cf] hover:text-[#3f2b20] border-[#5b422a] transition duration-300 ease-in-out px-2 font-medium">
              See All Projects
            </button>
          </div>
          <div className="flex flex-row gap-7">
            <div className="border border-[#5b422a] w-1/3 divide-y">
              <div className="relative">
                <p className="absolute right-0 z-10 font-barlow uppercase font-medium bg-[#fbf6ee] px-2 py-1 border-b border-l border-[#5b422a]">
                  Data Analytics
                </p>
                <img
                  className="h-72 w-full object-cover z-0"
                  src="app/imgs/filler.jpg"
                />
              </div>
              <div className="bg-[#fbf6ee] px-12 py-8 flex flex-col gap-1.5">
                <div>
                  <h1 className="font-serif text-3xl text-center">
                    EV Market Analysis
                  </h1>
                  <p className="text-center font-barlow uppercase font-medium">
                    April 2026
                  </p>
                </div>
                <ul className="list-disc font-sans">
                  <li>
                    Developed a dataset analysis that had all these details in
                    them.
                  </li>
                  <li>bullet 2</li>
                  <li>bullet 3</li>
                </ul>
                <p className="font-barlow uppercase font-medium text-center">
                  Skills List
                </p>
                <p>React.js, Vercel</p>
              </div>
              <ul className="flex flex-row justify-between font-barlow uppercase m-2 gap-2">
                <li className="flex-1 border text-center p-1 bg-[#fbf6ee] hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition ease-in-out duration-300">
                  Github
                </li>
                <li className="flex-1 border text-center p-1 bg-[#fbf6ee] hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition ease-in-out duration-300">
                  Github
                </li>
                <li className="flex-1 border text-center p-1 bg-[#fbf6ee] hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition ease-in-out duration-300">
                  Github
                </li>
              </ul>
              {/* <div className="p-3">
              <ul className="flex flex-row gap-2 flex-wrap font-medium">
                <li className="font-barlow uppercase border border-[#5b422a] bg-[#f4e4cf] px-2 py-1">
                  skill 1
                </li>
                <li className="font-barlow uppercase border border-[#5b422a] bg-[#f4e4cf] px-2 py-1">
                  skill 2
                </li>
                <li className="font-barlow uppercase border border-[#5b422a] bg-[#f4e4cf] px-2 py-1">
                  skill 3
                </li>
              </ul>
            </div> */}
            </div>
            <div className="border border-[#5b422a] w-1/3 divide-y">
              <div className="relative">
                <p className="absolute right-0 z-10 font-barlow uppercase font-medium bg-[#fbf6ee] px-2 py-1 border-b border-l border-[#5b422a]">
                  Data Analytics
                </p>
                <img
                  className="h-72 w-full object-cover z-0"
                  src="app/imgs/filler.jpg"
                />
              </div>
              <div className="bg-[#fbf6ee] px-12 py-8 flex flex-col gap-1.5">
                <div>
                  <h1 className="font-serif text-3xl text-center">
                    EV Market Analysis
                  </h1>
                  <p className="text-center font-barlow uppercase font-medium">
                    April 2026
                  </p>
                </div>
                <ul className="list-disc font-sans">
                  <li>
                    Developed a dataset analysis that had all these details in
                    them.
                  </li>
                  <li>bullet 2</li>
                  <li>bullet 3</li>
                </ul>
                <p className="font-barlow uppercase font-medium text-center">
                  Skills List
                </p>
                <p>React.js, Vercel</p>
              </div>
              <ul className="flex flex-row justify-between font-barlow uppercase m-2 gap-2">
                <li className="flex-1 border text-center p-1 bg-[#fbf6ee] hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition ease-in-out duration-300">
                  Github
                </li>
                <li className="flex-1 border text-center p-1 bg-[#fbf6ee] hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition ease-in-out duration-300">
                  Github
                </li>
                <li className="flex-1 border text-center p-1 bg-[#fbf6ee] hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition ease-in-out duration-300">
                  Github
                </li>
              </ul>
            </div>
            <div className="border border-[#5b422a] w-1/3 divide-y">
              <div className="relative">
                <p className="absolute right-0 z-10 font-barlow uppercase font-medium bg-[#fbf6ee] px-2 py-1 border-b border-l border-[#5b422a]">
                  Data Analytics
                </p>
                <img
                  className="h-72 w-full object-cover z-0"
                  src="app/imgs/filler.jpg"
                />
              </div>
              <div className="bg-[#fbf6ee] px-12 py-8 flex flex-col gap-1.5">
                <div>
                  <h1 className="font-serif text-3xl text-center">
                    EV Market Analysis
                  </h1>
                  <p className="text-center font-barlow uppercase font-medium">
                    April 2026
                  </p>
                </div>
                <ul className="list-disc font-sans">
                  <li>
                    Developed a dataset analysis that had all these details in
                    them.
                  </li>
                  <li>bullet 2</li>
                  <li>bullet 3</li>
                </ul>
              </div>
              <ul className="flex flex-row justify-between font-barlow uppercase m-2 gap-2">
                <li className="flex-1 border text-center p-1 bg-[#fbf6ee] hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition ease-in-out duration-300">
                  Github
                </li>
                <li className="flex-1 border text-center p-1 bg-[#fbf6ee] hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition ease-in-out duration-300">
                  Github
                </li>
                <li className="flex-1 border text-center p-1 bg-[#fbf6ee] hover:bg-[#f4e4cf] hover:text-[#3f2b20] transition ease-in-out duration-300">
                  Github
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
