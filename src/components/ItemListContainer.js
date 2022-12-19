import { useGetItem } from "../hooks/useGetItem";
import ItemList from "./ItemList";
import { Loading } from "./Loading";


const ItemListContainer = () => {
  const items = useGetItem();

  if (!items) {
    return <Loading />;
  }

  return (
    <div className="h-full containerProducts ">
      <ItemList products={items}/>
    </div>
  )
}
export default ItemListContainer