export default function Hero() {
  return (
    <div>
      <div className="divide-x divide-[#5b422a] flex flex-row text-[#5b422a] bg-[#fbf6ee]">
        <div className="w-1/2 flex flex-col gap-1 p-25 font-sans justify-center">
          <p className="text-2xl">Hello, I'm</p>
          <p className="text-8xl font-serif">Saarah Peer</p>
          <p className="text-2xl">I'm passionate about</p>
          <ul className="text-xl font-medium font-barlow flex gap-2 mt-2 font-md uppercase">
            <li className="bg-white px-1 border border-[#f4e4cf]">
              Software Development
            </li>
            <li className="bg-white px-1 border border-[#f4e4cf]">
              Data Analytics
            </li>
            <li className="bg-white px-1 border border-[#f4e4cf]">Design</li>
          </ul>
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
