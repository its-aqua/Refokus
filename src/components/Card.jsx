import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para, hover="none" }) => {
  return (
    <div className={`bg-zinc-700 p-5 rounded-xl ${width} hover:${hover} min-h-80 flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3>Up next: Culture</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">smtg heading</h1>
      </div>
      <div className="down w-full mt-30">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Make a shot
            </h1>
            <button className="rounded-full py-2 px-3 border-2 border-zinc-50 mt-5">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}  
      </div>
    </div>
  );
};

export default Card;
