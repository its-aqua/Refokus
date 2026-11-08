const Stripe = ({val}) => {
  return (
    <div className="w-[16.66%] px-4 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex justify-between items-center text-white ">
        <span><img className="w-28 h-5" src={val.url} alt="" /></span>
        <span className="font-semibold">{val.number}</span>
    </div>
  );
};

export default Stripe;
