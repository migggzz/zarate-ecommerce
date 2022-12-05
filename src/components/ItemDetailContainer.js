import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {item as itemMock} from "../mocks/item.mock"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        new Promise((resolve) => 
            setTimeout(() => resolve(itemMock.find((item) => item.id === id  )), 1000))
        .then((data) => setItem(data));
    }, [id]);

    
    return (
        <div className="flex justify-center items-center ">
        <ItemDetail item={item} />
      </div>
    )
}
export default ItemDetailContainer;