export default function Hero() {
  return (
    <div>
      <div className="divide-x divide-[#5b422a] flex flex-row text-[#5b422a] bg-[#fbf6ee]">
        <div className="w-1/2 flex flex-col gap-1 p-25 font-sans flex-none">
          <p className="text-2xl">Hello, I'm</p>
          <p className="text-8xl font-serif">Saarah Peer</p>
          <p className="text-2xl">I'm passionate about</p>
          <div className="text-md font-barlow flex gap-2 mt-2 font-medium">
            <button className="cursor-pointer p-3 border-2 uppercase text-[#fbf6ee] bg-[#A8794D] hover:bg-[#5b422a] border-[#e8d4b6] transition duration-300 ease-in-out">
              Software Development
            </button>
            <button className="cursor-pointer p-3 border-2 uppercase text-[#fbf6ee] bg-[#A8794D] hover:bg-[#5b422a] border-[#e8d4b6] transition duration-300 ease-in-out">
              Data Analytics
            </button>
            <button className="cursor-pointer p-3 border-2 uppercase text-[#fbf6ee] bg-[#A8794D] hover:bg-[#5b422a] border-[#e8d4b6] transition duration-300 ease-in-out">
              UI Design
            </button>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-1 p-25">
          <div className="text-5xl font-serif">About Me</div>
          <p className="font-sans text-lg">
            I'm a recent grad who recieved a B.S. in Computer Science with a
            Minor in Statistics and Data Science at Loyola Marymount University
            in Los Angeles, California. <br />
            <br /> I love developing minimal user interfaces for mobile and web
            apps (like this one), and finding business insights from datasets.
          </p>
        </div>
      </div>
    </div>
  );
}
