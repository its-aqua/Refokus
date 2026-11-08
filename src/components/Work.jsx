const Work = () => {
  var images = [
    {
      url: "https://images.unsplash.com/photo-1792516829130-26ac7738737d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      top: "50%",
      left: "50%",
      isActive: true,
    },
    {
      url: "https://images.unsplash.com/photo-1663335468790-cf7e8a1e0e73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1719212752796-5d9767ea0f83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1758710661075-8bb2d56404a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1695803040285-ce709715b040?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1674935932205-1bbbfcf3dfef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ];

  return (
    <div className="w-full mt-3">
      <div className="relative max-w-5xl mx-auto text-center">
        <h1 className="text-[30vw] text-white font-normal select-none leading-none">
          work
        </h1>
        <div className="absolute top-0 w-full h-full ">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  className="w-48 h-48 rounded-lg absolute translate-x-[-50%] translate-y-[-50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
