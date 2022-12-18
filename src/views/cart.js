import { Items } from "../components/Items"
import { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Loading } from "../components/Loading";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";
import emptyCart from "../assets/img/emptyCart.png";


const CartView = () => {
  const navigate = useNavigate();
  const { productsAdded: items, totalAmount } = useContext(CartContext);

  const goToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <Layout>
    <div className="flex flex-col max-w-[50%]">
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <img src={emptyCart} alt="Empty Cart" className="w-44 h-44" />
          <h1 className="text-2xl">No has agregado productos</h1>
          <button
              onClick={() => navigate("/")}
              className="rounded-lg p-2 bg-gray-800 text-white mt-4"
            >
              Ir al Inicio
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
            <div className="flex justify-end mt-4">
              <div className="flex flex-col">
                <span>
                  Total a pagar: <strong>${totalAmount}</strong>
                </span>
                <button
                  onClick={goToCheckout}
                  className="rounded-lg p-2 bg-gray-800 text-white"
                >
                  Ir al Checkout
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
