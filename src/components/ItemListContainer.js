import {useEffect, useState} from "react"
import ItemList from "./ItemList";
import {item} from "../mocks/item.mock"
import { useParams } from "react-router-dom";
import { Loading } from "./Loading";


const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  

  useEffect(() => {
    new Promise((resolve) => 
    setTimeout(() => {
      resolve(item);
    }, 2000)
    ).then((data) => {
      if(category) {
        const categories = data.filter((product) => product.category === category );
        setProducts(categories);
      } else{
        setProducts(data);
      }
    } );
  }, [category]); 

  if (products.length === 0) {
    return <Loading />;
  }

  return (
    <div className="h-full containerProducts ">
      <ItemList products={products}/>
    </div>
  )
}
export default ItemListContainer