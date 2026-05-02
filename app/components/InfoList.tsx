import { Link } from "react-router";

type props = {
  sentence: string;
  destination: string;
};

export default function InfoListSent({ sentence, destination }: props) {
  return (
    <div className="flex flex-col">
      <div>
        {destination == "" ? (
          <p className="pl-2 border-l-4 border-[#A8794D]">{sentence}</p>
        ) : (
          <p>{sentence}</p>
        )}
      </div>
      <div className="text-end">
        {destination !== "" ? (
          <Link
            className="font-barlow uppercase
      font-medium text-[#5b422a] hover:underline  hover:text-[#A8794D] decoration-2 underline-offset-4 transition-all duration-300 ease-in-out"
            to={destination}
          >
            Read More
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
