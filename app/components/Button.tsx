import { Link } from "react-router";

type props = {
  link: string;
  linkLabel: string;
};

export default function Button({ link, linkLabel }: props) {
  return (
    <a
      href={link}
      target="_blank"
      download="saarah_peer_resume_2026.pdf"
      className="w-fit cursor-pointer font-barlow uppercase text-lg border-2 border-[#e8d4b6] text-[#fbf6ee] bg-[#A8794D] hover:bg-[#5b422a] transition duration-300 ease-in-out px-2 py-1 font-medium"
    >
      {linkLabel}
    </a>
  );
}
