import { useGetItem } from "../hooks/useGetItem";
// import {useEffect, useState} from "react"
import ItemList from "./ItemList";
// import { item } from "../mocks/item.mock"
// import { useParams } from "react-router-dom";
import { Loading } from "./Loading";


const ItemListContainer = () => {
  const items = useGetItem();

  if (!items) {
    return <Loading />;
  }

  // const { category } = useParams();
  // const [products, setProducts] = useState([]);

  

  // useEffect(() => {
  //   new Promise((resolve) => {
  //     // Reset the state to show the loading spinner
  //     setProducts([]);

  //     // Simulation of a call to an api
  //     return setTimeout(() => {
  //       resolve(item);
  //     }, 2000);
  //   }).then((data) => {
  //     // Execute only in the categories views
  //     if (category) {
  //       const categories = data.filter(
  //         (product) => product.category === category
  //       );

  //       // Execute only in the home
  //       setProducts(categories);
  //     } else {
  //       setProducts(data);
  //     }
  //   });
  // }, [category]);


  // if (products.length === 0) {
  //   return <Loading />;
  // }

  return (
    <div className="h-full containerProducts ">
      <ItemList products={items}/>
    </div>
  )
}
export default ItemListContainer