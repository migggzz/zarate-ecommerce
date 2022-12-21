import { Items } from "../components/Items"
import { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Loading } from "../components/Loading";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";
import carritoVacio from "../assets/img/carritoVacio.png"


const CartView = () => {
  const navigate = useNavigate();
  const { productsAdded: items, totalAmount } = useContext(CartContext);

  const goToCheckout = () => {
    navigate("/checkout");
  };
  
  return (
    <Layout>
    <div className="flex flex-col max-w-[50%] ml-64">
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <img src={carritoVacio} alt="carrito vacio" className="w-64 h-64" />
          <h1 className="text-2xl">¡Aqui no productos!</h1>
          <button
              onClick={() => navigate("/")}
              className="rounded-lg p-3 bg-accent text-white mt-4"
            >
              HOME
            </button>
        </div>
      ) : (
        <div>
          <div className="flex gap-4">
            {items.map((product) => {
              const quantityAdded = product.quantityAdded;

                return (
                  <div className="relative">
                    <Items
                      product={product.item}
                      quantityAdded={quantityAdded}
                    />
                    <TrashWidget itemId={product.item.id} />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center mt-4">
              <div className="flex flex-col gap-4">
                <span className="text-3xl">
                  Total a pagar: <strong>${totalAmount}</strong>
                </span>
                <button
                  onClick={goToCheckout}
                  className="rounded-lg p-2 bg-success text-white"
                >
                  PAGAR
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};



export default CartView;
