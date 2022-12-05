import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemCount } from "./itemCount";

const ItemDetail = ({ item }) =>{
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;


    function handleCount(type) {
        if (type === "plus" && count < maxQuantity) setCount(count + 1);
        if (type === "minus" && count > 1) setCount(count - 1);
      }

    function handleAdd() {
        if (currentStock < count) alert("No hay suficiente stock de este producto");
        else setCurrentStock(currentStock - count);
      }

    function handleCheckout() {
        navigate("/cart")
    }

    return (
        <div className="flex w-5/6 bg-white rounded p-10 transition-all shadow hover:shadow-lg">
        <div className="flex justify-center w-1/2">
          <img className="max-h-[500px]" src={item.img} alt={item.name} />
        </div>

        <div className="flex flex-col justify-center pl-10">
          <h2 className="text-3xl font-bold text-gray-800">{item.name}</h2>
          <p className="mt-4 text-xl">{item.description}</p>
          <span className="mt-4 text-xl">
            Price: <strong className="text-gray-800">{item.price}</strong>
          </span>
          {currentStock > 0 && (
            <p className="text-sm">In Stock: {currentStock}</p>
          )}
  
          <div className="flex flex-col flex-1 items-center">
            {currentStock > 0 ? (
              <ItemCount count={count} handleCount={handleCount} />
            ) : (
              <span className="text-red-500 mt-10">Sin stock</span>
            )}
            <div className="w-full flex flex-col items-center">
              <button
                onClick={handleAdd}
                className="w-4/5 bg-gray-200 px-4 py-2 mt-2 rounded disabled:opacity-40"
                disabled={currentStock === 0}
              >
                Agregar al carrito
              </button>
              <button
                onClick={handleCheckout}
                className="w-4/5 bg-gray-800 text-white px-4 py-2 mt-2 rounded"
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ItemDetail;