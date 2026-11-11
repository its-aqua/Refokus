const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] font-light leading-none tracking-tighter">
            refocus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4 ">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500">Socials </h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((elem, index) => (
              <a className="block mt-3 text-zinc-600 capitalize">{elem}</a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500">Socials </h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((elem, index) => (
              <a className="block mt-3 text-zinc-600 capitalize">{elem}</a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right">Refocus is a pioneering digital agency driven by design and empowered by technology.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5HE2djk0Ssx9zvIU7SXEGI8T5Q5e-ARKmVQw14gmM8w&s=10" className="overflow-hidden object-cover h-8 mt-10 w-20" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
