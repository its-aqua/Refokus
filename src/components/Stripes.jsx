import Stripe from "./Stripe"

const Stripes = () => {
    var data = [
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b842b14070a2366d8a6bd_jologo-onDark.svg", number: 48},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a7f6e278782c11c6370_Keystone-white.svg", number: 2},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a7f6e278782c11c6370_Keystone-white.svg", number: 11},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e95_63aed9589c2695a8bfaa920e_yahoo.svg", number: 48},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e95_63aed9589c2695a8bfaa920e_yahoo.svg", number: 2},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e95_63aed9589c2695a8bfaa920e_yahoo.svg", number: 11},
    ]
  return (
    <div className="flex items-center mt-5">
        {data.map((elem, index)=>{
           return <Stripe val={elem}/>
        })}
    </div>
  )
}

export default Stripes