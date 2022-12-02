const Items = ({product}) => {
  return (
   <div className=" w-[200px] h-[400px] bg-white rounded p-4 shadow cursor-pointer transition-all hover:shadow-lg product">
      <div className="flex flex-col flex-1 gap-2.5">
         <img  src={product.img} className="w-full h-[200px] object-cover mb-2" alt="Product" />
         <span className="text-2xl font-bold pl-8 "> {product.name} </span>
         <span className="text-xl font-sans"> {product.title} </span>
         <hr className="mb-2" />
         <p className="mb-2"> {product.description} </p>
     </div>

      <div className="flex flex-col">
         <hr className="mb-2" />
         <div className="flex justify-between items-center">
            <span className="font-bold">{product.price}</span>   
         </div>
      </div>
   </div> 
  )
}
export default Items



