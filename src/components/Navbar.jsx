import Button from "./Button";
import prop from "/src/assets/prop.png";

const Navbar = () => {
  return (
    <div className="flex max-w-4xl mx-auto py-6 items-center justify-between border-b-[1px] border-zinc-600">
     <div className="nleft flex items-center">
       <img className="h-15 w-25 object-cover rounded-md " src={prop} alt="" />
      <div className="links text-white font-medium flex gap-10 ml-25">
        {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
          elem.length === 0 ? (
            <span className="w-[2px] h-7 bg-zinc-700"></span>
          ) : (
            <a className="text-sm flex items-center gap-1" href="#">
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.25em #00FF19" }}
                  className="inline-block h-1 w-1 bg-green-500 rounded-full"
                ></span>
              )}
              {elem}
            </a>
          ),
        )}
      </div>
     </div>
     <Button />
    </div>
  );
};

export default Navbar;
