import { useNavigate } from "react-router-dom";


export const Items = ({ product, quantityAdded }) => {
   const navigate = useNavigate();

   const description = product.description.slice(0, 30);
   const title = product.name.slice(0, 20);

   function handleNavigate() {
      navigate(`/item/${product.id}`)
   };

   console.log(product.img)

  return (
   <div onClick={handleNavigate} className=" w-[200px] h-[400px] bg-white rounded p-4 shadow cursor-pointer transition-all hover:shadow-lg product">
      <div className="flex flex-col flex-1 gap-2.5">
         <img  src={product.img} className="w-full h-[200px] object-cover mb-2" alt="Product" />
         <span 
             className="text-2xl font-bold pl-8 "> 
            {product.name.length > 20 ? `${title} ...` : product.name} 
          </span>
         <span className="text-xl font-sans"> {product.title} </span>
         <hr className="mb-2" />
         <p className="mb-2">
          {product.description.length > 30
            ? `${description} ...`
            : product.description}
        </p>
     </div>

     <div className="flex flex-col">
        <hr className="mb-2" />
        <div className="flex justify-between items-center">
          <span className="font-bold">${product.price}</span>
          <span
            className={product.stock === 0 ? "text-xs text-red-500" : "text-xs"}
          >
            {product.stock === 0
              ? "Sin Stock"
              : quantityAdded
              ? `Agregados: ${quantityAdded}`
              : `En Stock: ${product.stock}`}
          </span>
        </div>
      </div>
   </div> 
  )
}
export default Items




