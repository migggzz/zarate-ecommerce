
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {item as itemMock} from "../mocks/item.mock"
import { useParams } from "react-router-dom";
import { Loading } from "./Loading";


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        new Promise((resolve) => 
            setTimeout(() => resolve(itemMock.find((item) => item.id === id  )), 1000))
        .then((data) => {
          setItem(data) 
          setLoading(false)
        });
    }, [id]);

    return loading ? (
      <Loading/>
  ):
  (
     <div className="flex justify-center items-center ">
          <ItemDetail item={item} />
     </div>
  )
}
export default ItemDetailContainer;