export default function Hero() {
  return (
    <div className="divide-y divide-[#5b422a]">
      <div className="text-[#5b422a] bg-[#fbf6ee] lg:pt-14 pt-36">
        <div className="lg:divide-x divide-y lg:divide-y-0 divide-[#5b422a] flex lg:flex-row flex-col">
          <div className="lg:w-1/2 flex flex-col gap-1 lg:p-25 p-10 font-sans justify-center">
            <p className="lg:text-8xl text-6xl font-serif">Saarah Peer</p>
            <p className="lg:text-2xl text-xl">
              Software Developer passionate about data analytics and design.
            </p>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-1 lg:p-25 p-10">
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
      <div className="flex justify-center -mt-4">
        <div className="border border-[#5b422a] animate-bounce text-[#5b422a] bg-[#fbf6ee] flex items-center justify-center p-2 h-12 w-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
