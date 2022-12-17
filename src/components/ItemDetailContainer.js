
import ItemDetail from "./ItemDetail";
import { Loading } from "./Loading";
import { useGetItem } from "../hooks/useGetItem";


const ItemDetailContainer = () => {
    const item = useGetItem();

    if (!item) {
      return <Loading />;
    }
  
    // const [item, setItem] = useState([]);
    // const {id} = useParams();
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     new Promise((resolve) => 
    //         setTimeout(() => {
    //             const itemFiltered= itemMock.find((item) => item.id === id  );
    //             resolve(itemFiltered);
    //         }, 1000)    
    //     ).then((data) => {
    //         setItem(data)
    //         setLoading(false)
    //     });
    // }, [id]);
    
     (
       <div className="flex justify-center items-center ">
            <ItemDetail item={item} />
       </div>
    )
}
export default ItemDetailContainer;