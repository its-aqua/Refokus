import Button from "./Button"

const Product = ({data}) => {
  return (
    <div className="w-full py-5 text-white">
        <div className="mx-auto max-w-4xl flex justify-between items-center">
          <h1 className="text-5xl font-medium">{data.title}</h1>
          <div className="dets w-1/3">
            <p className="mb-5">{data.description}</p>
            <div className="flex items-center gap-10">
            {data.live && <Button />}
            {data.case && <Button title= "Case Study"/>}             
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product