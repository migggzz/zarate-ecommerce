
import ItemList from "./ItemList";
import { Loading } from "./Loading";
import { useGetItem } from "../hooks/useGetItem";
// import {
//   collection,
//   getDocs,
//   getFirestore,
//   limit,
//   query,
//   where,
// } from "firebase/firestore";



export const ItemListContainer = () => {
  const items = useGetItem();

  if (!items) {
    return <Loading />;
  }

//   const { category } = useParams();
//   const [products, setProducts] = useState([]);

  

//  useEffect(() => {
  //   const db = getFirestore();
  //   const itemsCollection = collection(db, "items");
  //   const q = query(
  //     itemsCollection,
  //     where("category", "==", "remera"),
  //   );

  //   getDocs(q).then((snapshot) => {
  //     const products = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));

  //     setProducts(products);
  //   });
  // }, []);

  //   new Promise((resolve) => {
  //     setProducts([]);
  //     return setTimeout(() => {
  //     resolve(item);
  //   }, 2000)
  //   }).then((data) => {
  //     if(category) {
  //       const categories = data.filter((product) => product.category === category );
  //       setProducts(categories);
  //     } else{
  //       setProducts(data);
  //     }
  //   });
  // }, [category]); 



  return (
    <div className="h-full containerProducts ">
      <ItemList products={items}/>
    </div>
  )
}
export default ItemListContainer