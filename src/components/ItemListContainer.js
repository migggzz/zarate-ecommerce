import {useEffect, useState} from "react"
import ItemList from "./ItemList";
import {item} from "../mocks/item.mock"
import { useParams } from "react-router-dom";


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



  return (
    <div className="h-full containerProducts ">
      <ItemList products={products}/>
    </div>
  )
}
export default ItemListContainer