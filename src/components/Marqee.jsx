
const Marqee = ({imgurl}) => {
  return (
    <div className="flex w-full py-5 gap-16 whitespace-nowrap overflow-hidden">
        {imgurl.map(url => <img src={url} className="h-7"/>)}
        {imgurl.map(url => <img src={url} className="h-7"/>)}
    </div>
  )
}

export default Marqee