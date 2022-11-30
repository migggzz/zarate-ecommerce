import { Layout } from "../components/Layout";
import ItemListContainer from "../components/ItemListContainer";
import { useParams } from "react-router-dom";

export const CategoryView = () => {
    const { category } = useParams();
    


    return ( 
        <Layout>
            <ItemListContainer/>   
        </Layout>
    )  
}

export default CategoryView;